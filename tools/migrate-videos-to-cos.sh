#!/bin/bash
# 把官网的演示视频从个人/临时 OSS 桶迁移到实验室统一的腾讯云 COS。
#
# 在 ResearchBuddy 生产服务器上执行（密钥只存在于那里）：
#   ssh ubuntu@43.163.8.22
#   bash migrate-videos-to-cos.sh
#
# 迁移后的公开地址：https://download.arklab-hkustgz.com/public/website/video/<新文件名>
set -euo pipefail

RB_DIR="/home/ubuntu/researchbuddy"
BUCKET="researchbuddy-1407103351"
PREFIX="public/website/video"
CFG="$(mktemp -t rb-cos-XXXXXX.yaml)"
WORK="$(mktemp -d -t rb-video-XXXXXX)"
trap 'rm -f "$CFG"; rm -rf "$WORK"' EXIT

# 源地址 -> 目标文件名（顺手把带空格/大小写混乱的旧文件名规范化）
SOURCES=(
  "https://arkxlab-video-tmp.oss-cn-guangzhou.aliyuncs.com/AttenPlay.mp4|attenplay-demo.mp4"
  "https://arkxlab-video-tmp.oss-cn-guangzhou.aliyuncs.com/FromToolToParterner.mp4|hri-painting-demo.mp4"
  "https://arkxlab-video-tmp.oss-cn-guangzhou.aliyuncs.com/MojiKit-camera%20ready-high2K.mp4|mojikit-demo.mp4"
  "https://arkxlab-video-tmp.oss-cn-guangzhou.aliyuncs.com/LINGOLIFT.mp4|lingolift-demo.mp4"
  "https://mawxuan.oss-cn-hangzhou.aliyuncs.com/Duet_UI_V1.mp4|duet-ui-demo.mp4"
)

COSCLI_VERSION="${COSCLI_VERSION:-v1.0.8}"

# 与 ResearchBuddy 的 scripts/upload-desktop-release-to-cos.sh 保持同一套 coscli 获取方式：
# 优先用已安装的，否则把官方发布的静态二进制下到 /tmp（不做系统级安装）。
ensure_coscli() {
  if [ -n "${COSCLI_BIN:-}" ] && [ -x "${COSCLI_BIN}" ]; then printf '%s' "$COSCLI_BIN"; return; fi
  if command -v coscli >/dev/null 2>&1; then command -v coscli; return; fi
  os="$(uname -s)"; arch="$(uname -m)"
  case "$os" in Linux) os=linux ;; Darwin) os=darwin ;; *) echo "不支持的系统: $os" >&2; exit 1 ;; esac
  case "$arch" in x86_64|amd64) arch=amd64 ;; aarch64|arm64) arch=arm64 ;; *) echo "不支持的架构: $arch" >&2; exit 1 ;; esac
  bin="/tmp/coscli-${COSCLI_VERSION}-${os}-${arch}"
  if [ ! -x "$bin" ]; then
    echo "  下载 coscli ${COSCLI_VERSION} (${os}-${arch})..." >&2
    curl -fL --retry 3 -o "$bin" "https://github.com/tencentyun/coscli/releases/download/${COSCLI_VERSION}/coscli-${COSCLI_VERSION}-${os}-${arch}"
    chmod 700 "$bin"
  fi
  printf '%s' "$bin"
}
COSCLI="$(ensure_coscli)"

echo "▶ [1/4] 从服务器 .env 读取 COS 密钥（不落盘明文）"
set -a; . "$RB_DIR/.env"; set +a
: "${COS_SECRET_ID:?.env 里没有 COS_SECRET_ID}"
: "${COS_SECRET_KEY:?.env 里没有 COS_SECRET_KEY}"
umask 077
printf 'cos:\n  base:\n    secretid: %s\n    secretkey: %s\n    sessiontoken: ""\n    protocol: https\n  buckets:\n  - name: %s\n    alias: rb\n    region: ap-singapore\n    endpoint: cos.ap-singapore.myqcloud.com\n    ofs: false\n' \
  "$COS_SECRET_ID" "$COS_SECRET_KEY" "$BUCKET" > "$CFG"

echo "▶ [2/4] 下载源视频到临时目录（$WORK）"
for entry in "${SOURCES[@]}"; do
  url="${entry%%|*}"; name="${entry##*|}"
  echo "  ← $name"
  curl -fSL --retry 3 -o "$WORK/$name" "$url"
done

echo "▶ [3/4] 上传到 cos://$BUCKET/$PREFIX/"
for entry in "${SOURCES[@]}"; do
  name="${entry##*|}"
  "$COSCLI" cp "$WORK/$name" "cos://$BUCKET/$PREFIX/$name" -c "$CFG" --disable-log
done

echo "▶ [4/4] 校验公开可访问 + 大小一致"
fail=0
for entry in "${SOURCES[@]}"; do
  name="${entry##*|}"
  local_size=$(stat -c%s "$WORK/$name")
  remote_size=$(curl -fsSI "https://download.arklab-hkustgz.com/$PREFIX/$name" | tr -d '\r' | awk 'tolower($1)=="content-length:"{print $2}')
  if [ "$local_size" = "$remote_size" ]; then
    printf '  ✓ %-24s %s bytes\n' "$name" "$remote_size"
  else
    printf '  ✗ %-24s 本地 %s / 远端 %s\n' "$name" "$local_size" "${remote_size:-无响应}"
    fail=1
  fi
done

[ "$fail" = 0 ] || { echo "有文件校验失败，先别改网站引用"; exit 1; }
echo ""
echo "✓ 全部就绪。现在可以部署官网（HTML 里已指向新地址）。"
echo "  旧的 arkxlab-video-tmp / mawxuan 两个 OSS 桶确认无其他引用后再删。"

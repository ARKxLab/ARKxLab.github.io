# 资源存放规范（Assets）

> 最后核实：2026-08-22。**新增任何图片、视频、PDF 之前先读这一份。**
> 发布流程见 [`RELEASE_PROCESS.md`](RELEASE_PROCESS.md)；本文只回答一个问题：**这个文件应该放在哪里，做成什么规格。**

---

## 1. 一张表决定放哪里

| 资源 | 放哪 | 页面里怎么引用 |
|---|---|---|
| 页面插图、项目配图、teaser | 仓库 `projects_collection/projects_img/<项目>/` | 相对路径 |
| 人员头像 | 仓库 `images/` | 相对路径 |
| 站点背景图、通用图标 | 仓库 `images/`、`images/project_bg/` | 相对路径 |
| CSS / JS / 图标字体 | 仓库 `css/` `js/` `fonts/` | 相对路径 |
| **视频（.mp4/.mov/.webm）** | **COS** `public/website/video/` | `https://download.arklab-hkustgz.com/public/website/video/<名>` |
| 大 PDF、数据包（> 20 MB） | **COS** `public/website/files/` | 同上，绝对 URL |
| 小 PDF（论文预印本等，< 5 MB） | 仓库 `projects_collection/projects_img/<项目>/` | 相对路径 |
| 桌面端安装包、`latest*.yml` | COS **桶根目录**（ResearchBuddy 的 electron-updater 在用） | 不归本站管，**别碰** |

判断口诀：**能压到 1 MB 以内的静态图 → 进仓库；一压还是几十上百 MB 的 → 进 COS。**

## 2. 硬性限制（踩了会直接出事）

- **Cloudflare Workers 单文件 ≤ 25 MiB、文件总数 ≤ 20,000。** 超限的文件线上取不到。视频必须走 COS，没有例外。
- **仓库总体积要压住。** GitHub 对仓库/Pages 站点有 1 GB 软上限，`.git` 历史里的大图是删不掉的，所以**提交前就要压好**，别指望事后清理。
- **文件名大小写必须和引用完全一致**（线上 Linux 敏感，Windows 本地不敏感）。
- **文件名不要带空格**（会变成 `%20`，链接易错）。用小写连字符：`mojikit-demo.mp4`、`system-design.png`。
- **仓库内容全部公开**，GitHub Pages 会原样暴露所有文件。任何不该公开的东西都不要提交。

## 3. COS 的公开/私有边界

桶 `researchbuddy-1407103351`（ap-singapore，公开域名 `download.arklab-hkustgz.com`）**默认公网可读**。

- ✅ 官网视频、对外分发的资料 → `public/website/...` 前缀
- ❌ 被试数据、访谈录音、含个人信息的材料、数据库备份 → **不许进这个桶**，另开私有桶（见 ResearchBuddy 仓库 `docs/development/12-object-storage.md`）
- ❌ **不要往桶根目录放任何东西** —— 那是 electron-updater 的验证路径，混入无关文件会踩坑

密钥只在 ResearchBuddy 生产服务器的 `/home/ubuntu/researchbuddy/.env` 里，仓库和本机都没有。上传要在那台机器上做，脚本见 [`tools/migrate-videos-to-cos.sh`](../tools/migrate-videos-to-cos.sh)。

## 4. 图片规格

提交前自查：

- 长边 **≤ 1920 px**（页面最大展示宽度约 1200，再大是纯浪费）
- 格式优先 **WebP**；需要透明通道且 WebP 不划算时用 PNG；照片类可用 JPEG（quality ≈ 82）
- 单文件目标 **< 500 KB**，超过 1 MB 需要理由
- 非首屏的 `<img>` 一律带 `loading="lazy" decoding="async"`

现状：全站被引用的图片已在 2026-08-22 统一处理过（长边 1920、转 WebP），总量 195 MB → 26 MB。新加的图请按同样规格来，不要把未压缩的原图直接扔进来。

## 5. 视频规格

- `<video>` 必须写 **`preload="none"`** 并配 **`poster`** 封面图。不写 `preload` 时浏览器会在页面加载阶段就开始拉整个视频文件。
- **不要用 `autoplay`**（配上几十上百 MB 的文件等于让每个访客白下一遍）。

标准写法：

```html
<video controls preload="none" poster="projects_img/<项目>/teaser.webp"
       class="w-100 rounded shadow" style="max-width: 100%;">
    <source src="https://download.arklab-hkustgz.com/public/website/video/<名>.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**顺序不能反：先上传 COS → `curl -sI` 确认 200 → 再改页面引用 → 再 push。** 反过来做，线上就是一段时间的 404。

## 6. 当前的外部资源清单

| 位置 | 内容 | 状态 |
|---|---|---|
| `download.arklab-hkustgz.com/public/website/video/` | 5 个项目演示视频 | ✅ 目标位置 |
| `arkxlab-video-tmp.oss-cn-guangzhou.aliyuncs.com` | 迁移前的 4 个视频（桶名带 `tmp`） | ⚠️ 迁移完成后确认无引用并删除 |
| `mawxuan.oss-cn-hangzhou.aliyuncs.com` | 迁移前的 DuetUI 视频（**个人账号**） | ⚠️ 同上 |
| `lingolift-1335262060.cos.ap-guangzhou.myqcloud.com` | 3 张 LingoLift 配图 | ⚠️ 待并入统一桶 |
| `hongniyecom.files.wordpress.com`、`aireasoning.media.mit.edu` | 合作方/个人站点的图片 | ℹ️ 外站资源，不归我们控制，链接可能失效 |

个人账号或临时桶上的资源随时可能因为欠费、清理、成员离开而失效，**新内容不要再往这两个地方放**。

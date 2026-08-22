# 更新日志（Changelog）

本文档用于记录站点内容与结构的变更，便于追踪维护历史。

## 书写规范
- 条目结构：日期（UTC+8） + 变更要点（动词开头的短句）。
- 变更类型建议：新增、修复、修改、重构、文档、测试、构建/部署、其它。
- 建议每次合并/发布时追加一节，必要时可附带关联文件列表。

---

## 2026-08-22
- 新增：Lab Director 个人主页 `profile/xintong.html`（结构参考 mingmingfan.com / cislab 成员页：About（中英文简介）→ Paper Awards → Research → Prospective Students → Services → Teaching，视觉沿用站内 `section` / `unit-4` / `profile-avatar-wrapper` 样式，未改 SCSS）；`people.html` Lab Director 卡片由外部 faculty page 改为链接该页。
- 资源：`images/xin.jpg` 替换为新证件照（居中裁成 900×900 JPEG，约 117 KB，原图 260×260）；该文件名被 48 处引用，覆盖同名即全站生效。
- 文档：`docs/PEOPLE_LINKS.md` 同步 Lab Director 链接。
- 重构：`people.html` Members 区按 Lab Director / PhD Students（2025 Spring、2025 Fall、2026 Spring、2026 Fall cohort）/ MPhil Students（2025 Fall、2026 Fall cohort）/ Research Assistants 分组重排（各组内按入学时间先后排列），PhD 卡片标注 co-mentor / co-supervised 信息；新增 `people-group-title`、`people-cohort-title` 分组标题（仅用 Bootstrap 工具类，未改 SCSS）。
- 新增：13 个占位个人页 `profile/{junrong,yuying,liyi,qiuju,bingqian,jiansheng,anastasia,yihu,yiying,fangze,xintan,xinyuan,haijia}.html`，头像统一用 `images/null.jpg`，待补资料后替换；Haijia Li、Bingqian Wang 的简介与头像（`images/haijia.webp`、`images/bingqian.webp`）已补充，Bingqian Wang 个人页附 CV 链接；Xinyuan Lan 的简介与临时头像（`images/xinyuan.webp`，204×357 低清，待换高清）已补充；新增 Research Assistant Jiale Liu（`profile/jiale.html`、`images/jiale.webp`）。
- 调整：Primo Pan、Haoxuan Wang、Yizhi Song、Yinghao Gao（2024 Fall MPhil）、Yixuan Li、Jingyang Lin（RA 2024–2025）、Shan Luo（RA 2025）、Liwen He（Visiting Student）迁入 Alumni；Huanyi Wan 由 RA 改为 2026 Fall MPhil（同步 `profile/huanyi.html`）。
- 文档：`docs/PEOPLE_LINKS.md` 按新分组重写 Members 列表并补全 Alumni 链接。
- 文档：新增 `docs/RELEASE_PROCESS.md`，梳理实际托管拓扑（GitHub Pages + Cloudflare Workers 均由 `gh-pages` 分支自动部署；视频在腾讯云 COS）与标准发布流程、自检清单、回滚与故障排查。
- 文档：新增根目录 `CLAUDE.md`，为 AI Agent 提供仓库操作规范（不主动 push、先验证外链、SCSS 需同步编译产物、文件大小/大小写约束等）。
- 文档：新增 `docs/ASSETS.md`，规定图片/视频/大文件分别存放在仓库还是腾讯云 COS、各自的规格、命名与公开边界；`CLAUDE.md`、`README.md`、`docs/RELEASE_PROCESS.md` 均已交叉引用。
- 构建/部署：新增 `tools/migrate-videos-to-cos.sh`，把 5 个项目演示视频从阿里云临时桶/个人账号桶迁移到 COS `public/website/video/` 前缀，含下载、上传与大小校验。
- 修改：5 个项目页的 `<video>` 引用改指向 `download.arklab-hkustgz.com/public/website/video/`；统一加 `preload="none"` 与 `poster` 封面，移除 MojiKit（243 MB）与 LINGOLIFT（64 MB）两处的 `autoplay`。
- 重构：被引用的 173 张图片统一按长边 1920 px 重采样并转 WebP，同步重写 264 处引用；被引用图片总量 195 MB → 26 MB（工作区 344 MB → 174 MB）。
- 修复：修正 70 处相对路径错误的图片引用（缺少 `../`，导致约 40 个项目页的微信/B站图标不显示），以及 `starescue.html` 中 6 处被误加 `../` 前缀的绝对 URL。
- 修改：为 89 个页面的 929 个非首屏 `<img>` 添加 `loading="lazy" decoding="async"`。
- 文档：修正 `README.md` 部署章节（原文写的是推送到 `master`/`main`，实际默认分支为 `gh-pages`；补充 Cloudflare 与 COS 说明）。
- 规范：明确"所有上线必须人工批准"——Agent 只做本地 commit、起本地服务器并提醒开发者复核，push 由开发者执行（`CLAUDE.md` 规则 1、`docs/RELEASE_PROCESS.md` §2.4）。

---

## 2025-10-29
###人员与样式
- 新增：`people.html` 新增 Research Assistant Jie Yu、Qiyuan Cheng 卡片并替换主页头像。
- 新增：创建 `profile/jieyu.html`、`profile/qiyuan.html`，撰写研究方向与联系方式。
- 修改：`profile/yixuan.html`、`profile/yuanxu.html`、`profile/tianjian.html` 更新个人简介、联系方式及头像展示布局；同步 `people.html` 文案（如 Tianjian Liu 改为 PhD Student、Yuan Xu 研究方向说明）。
- 调整：`people.html` 将 Keyi Zeng、Jiaxin Wang、Yixuan Li、Chenwan Zhong 移至 Alumni 分组；按需求隐藏 Ruyi Li、Chunwei Yang 卡片。
- 调整：`people.html` 恢复 DKU 研究助理卡片（Ruiqi Chen、Yiping Tian、Jiaxun Cao、Qingyang He、Liwen He、Hanxi Bao、Weicheng Zheng）并统一迁移至 Alumni；补录 Weicheng “Jerry” Zheng 卡片。
- 修改：更新 Alumni 成员最新身份——Yixuan Li（Tsinghua University M.Eng.）、Jiaxun (Jessie) Cao（Duke University PhD）、Weicheng “Jerry” Zheng（Carnegie Mellon University MS），以及 Haitong Lin、Rongqi Bei、Yutong Ren、Xuening Peng 的在读学位说明。
- 样式：新增 `profile-avatar-wrapper`/`profile-avatar` 样式，统一个人页头像裁切比例；在相关个人页引入该容器。
- 文档：更新 `docs/PEOPLE_LINKS.md`，补充 Jie Yu、Qiyuan Cheng 与调整后成员的链接。

###项目内容
- 新增：创建 `projects_collection/HRI-Painting-Collaboration-Qualitative/`、`projects_collection/duet-ui/` 目录与 `index.html`，撰写项目摘要、亮点和导航链接。
- 新增：`projects.html` 增补 “From Tool to Partner” 与 “DuetUI” 卡片，并指向新建详情页/外部资源。
- 修改：项目卡片与详情页引用上传至对应目录的 `teaser.jpg`、`Teaser.png` 作为展示图。

### 人员与样式（追加 2025-10-29）
- 新增：`people.html` 新增 Research Assistant Shan Luo 卡片，并链接至 `profile/shan.html`。
- 新增：创建 `profile/shan.html`，包含研究方向、联系方式与 ACM DOI 链接。
- 修改：`people.html` 中 Shan Luo 卡片简介文案为两段更完整描述（对齐个人主页内容）。
- 资源：新增头像 `images/luoshan.JPG`，并将原引用从 `IMG_0741.JPG` 统一为 `luoshan.JPG`。
- 样式：新增卡片通用类 `people-card-img`，统一列表卡片头像为 1:1 居中裁切，效果与个人主页 `profile-avatar-wrapper` 一致；已在 `people.html` 全量替换应用。
- 规范：头像建议源图 ≥ 1000×1000，居中裁切；命名使用英文/拼音（示例：`luoshan.JPG`）。

### 项目内容（追加 2025-10-29）
- 新增：`projects_collection/CH_history_edu.html` 补充 "Background and Challenges""Our Solution""Study Design""Main Findings""Design Implications" 内容段落，更新 LLM 自适应角色与动作模块描述。
- 新增：引入 6 张项目示意/结果图（`chi25-27-fig1.jpg` ~ `chi25-27-fig8.jpg`）并完善图注说明，展示系统架构、实验条件与量化结果。
- 调整：`projects.html` 隐藏 "HRI-Painting-Collaboration-Qualitative" 项目卡片（通过 HTML 注释），项目详情页与资源文件保留不变。

---

## 2025-10-23
- 文档：新增 `README.md` 中文说明，完善技术栈、目录结构、本地开发、部署与 FAQ。
- 文档：新增 `PEOPLE_LINKS.md`，汇总 `people.html` 中人员与跳转链接；补充维护建议。
- 文档：新增本更新日志 `CHANGELOG.md`。
- 构建：`.gitignore` 新增忽略目录 `.playwright-mcp/`。
- 测试：本地起服务并完成 Playwright 冒烟检查，保存截图至 `.playwright-mcp/`。
- 新增：创建以下个人主页模版并接入导航链接：
  - `profile/daniel.html`、`profile/jiaxin.html`、`profile/zhaowen.html`、`profile/yinghao.html`、`profile/jiawen.html`。
- 修复：`people.html` 多处跳转问题/404（将 `#` 更换为 `profile/*.html` 或外部主页）。
- 修改：`people.html` 中 Prof. Xin Tong 的主页链接为 HKUST(GZ) 个人页。
- 修改：`people.html` 中“Prof.Jung Choi” 展示名更正为 “Prof. Jung Eun Choi”。
- 修改：同步 DKU Collaborators 外链（Ming Li、Luyao Zhang、Lijing Yan、Chenkai Wu、Jung Eun Choi、Charles Chang）。
- 调整：将 “Prof. Fan Liang, PhD” 移至 DKU Collaborators，并设置链接 `https://fan-liang.com/`。
- 修改：External Collaborators 外链更新（Min Fan、RAY LC、Zhicong Lu、Xin Yi、Yuhang Zhao、Yuling Sun、Kaixing Zhao、Yaxing Yao、Zhixuan Zhou、Lawrence Kim）。

---

## 后续建议
- 当人员信息或链接更新时：先改 `people.html`，再同步 `PEOPLE_LINKS.md` 与本 `CHANGELOG.md`。




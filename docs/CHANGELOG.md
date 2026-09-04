# 更新日志（Changelog）

本文档用于记录站点内容与结构的变更，便于追踪维护历史。

## 书写规范
- 条目结构：日期（UTC+8） + 变更要点（动词开头的短句）。
- 变更类型建议：新增、修复、修改、重构、文档、测试、构建/部署、其它。
- 建议每次合并/发布时追加一节，必要时可附带关联文件列表。

---

## 2026-09-04
- 新增：项目页 `projects_collection/MurALive.html`（MurALive: Transforming Dunhuang Murals into Interactive Narratives through AI Analysis and Multi-Agent Generation，ACM DIS '26），含 Abstract、Design Process、Desk Research、Formative Study、Grounding 流程与模型表现、Multi-Agent 框架、交互界面、Evaluation 与 Results、The Team 各区块，论文链接 `https://doi.org/10.1145/3800645.3813099`。
- 新增：`projects.html` 补上对应项目卡片（标签 DIS，筛选类 `comp CH AI`），置于列表最前（DIS '26 为最新发表）。
- 修改：MurALive 页 hero 不用常规的 `cover` 背景裁切——论文 Fig.1 比例约 4.6:1，`cover` 会放大到全屏导致糊图，改为 hero 高度随内容收紧、Fig.1 按原比例在流内整幅展示，标题排在图下方（内联样式覆盖全站 `.hero img` 的 absolute + scale(1.3)），长标题改用已有的 `heading-21`。
- 资源：新增 `projects_collection/projects_img/MurALive/` 共 8 张配图（论文原图，长边压到 1920、转 WebP，单张 45–125 KB）：teaser、design-process、four-murals、static-prototype、grounding-pipeline、interface-nine-colored-deer、interface-king-shibi、experience-ratings。

## 2026-08-25
- 修改：补齐 PhD 学生 Yuying Wan 的资料。新增头像 `images/Yuying.webp`（原 HEIC 转 WebP，1280×1280，约 216 KB）；`people.html` 卡片与 `profile/yuying.html` 个人页替换占位图并补上研究方向简介（ubiquitous computing 与 accessibility 的交叉方向）。

## 2026-08-23
- 修改：`profile/xintong.html` Teaching 区块按 PI 提供的最新授课信息重写。原本是 5 条不分学期、无课程代码的课程名列表，现改为按学期倒序分组（Fall 2026 / Spring 2026 / Fall 2025 / Spring 2025，共 11 门次），每条列出「课程代码 + 课程全名 + (UG/PG)」，分组标题沿用页内论文列表同款 `people-cohort-title` 样式；区块导语同步补上 introductory computer science。课程代码统一写成无空格形式（`CMAA5037`、`UFUG1601`），学期统一写成「季节 + 年份」。全站仅此一处有 Teaching 内容（已 grep 所有 HTML 与 `docs/*.md` 确认）。
- 修改：暂时隐藏 PI 三个招生研究方向的正文。`profile/xintong.html` Prospective Students 区块中的 "Below are three areas in which I look for MPhil+PhD students:" 及其三条列表、`perspective_stu.html` 的 "Research Topics" 整节（同一批研究方向的卡片版）均以 HTML 注释保留源码、不再渲染，待更新后恢复。此前 2026-08-22 已隐藏 `profile/xintong.html` Research 区块顶部的同源卡片，本次为剩余两处。`perspective_stu.html` 隐藏后 Lab Director 与 For Prospective Students 两节均为白底相邻，未调整 `bg-light` 交替（恢复该节时无需回退额外改动）。

## 2026-08-22
- 修改：站点根路径改为直达项目页。原 `index.html`（实验室介绍首页）改名为 `homepage.html`，线上地址 `/homepage`；新建极小的 `index.html` 跳转桩（`<meta refresh>` + JS 跳到 `projects.html`，供 GitHub Pages 使用），并新增根目录 `_redirects`（Cloudflare Workers 静态资源在服务端把 `/` 302 到 `/projects`，无闪烁）。
- 修改：全站导航中的 "Home" 统一改为 "About"，指向 `homepage.html`；Logo 链接改为直接指向 `projects.html`（避免经根路径二次跳转）；页脚 "ARK Lab" 署名链接指向 `homepage.html`。涉及 79 个 HTML 文件（含 `includes/header-*.html`），共 160 处链接。
- 文档：`README.md` 目录结构与预览说明同步更新。
- 修改：`profile/xintong.html` 论文列表末尾新增 "Earlier Publications" 小节，一句话引导 2022 年及更早的论文到 Google Scholar 查看。
- 修改：`profile/xintong.html` 暂时隐藏 Research 区块顶部的研究概览（"Human-Centered HCI, AI and Creative Media" 标题、简介与三个研究方向卡片），以 HTML 注释保留源码，待后续更新后恢复；论文列表保持不变。
- 修复：首页 hero 背景图在宽屏（>~2200px）/高视口下右侧与下方露出黑边——通用 `.hero img` 只按原图尺寸（1920px）绝对定位再 `scale(1.3)`，未锚定 hero 盒子；`index.html` hero 容器新增 `hero-home` 类，`css/style.css` 追加 `.hero-home .img-bg`/`img` 规则（绝对定位占满 + `object-fit: cover` + 1.1 倍余量，与 `hero-campus`/`hero-harmony` 同一套做法）。已在 2560×1300、1920×1080、375×812 下验证四边均覆盖、无横向滚动。
- 新增：Lab Director 个人主页 `profile/xintong.html`（结构参考 mingmingfan.com / cislab 成员页：About（中英文简介）→ Paper Awards → Research → Prospective Students → Services → Teaching，视觉沿用站内 `section` / `unit-4` / `profile-avatar-wrapper` 样式，未改 SCSS）；`people.html` Lab Director 卡片由外部 faculty page 改为链接该页。
- 新增：`profile/xintong.html` Research 区块加入 CV（2026-07）中 [C17]–[C67] 共 51 篇论文列表，按年份倒序、可按年份筛选（页内小段 JS），32 篇链接到站内项目页；缩略图 45 张统一转 WebP（≤ 640 px 宽）存入 `images/pubs/Cxx.webp`（37 张来自 PI 提供的配图，8 张复用项目页 teaser），C25/C33/C34/C36/C39/C40 暂用「会议名 + 年份」占位块，待补图。随后去掉了列表中的 `[Cxx]` 编号并改为 "Selected Publications"；三个研究方向的描述改为逐字照录 PI 原文。
- 新增：上述 51 篇论文全部补上 DOI 链接（Crossref 检索 + `doi.org` 逐个验证可解析；C25 采用 CSCW 正式版 `10.1145/3637305` 而非 OSF 预印本），无站内项目页的 19 篇标题直接链到 DOI。
- 资源：补上 3 篇论文的缩略图 `images/pubs/{C25,C39,C40}.webp`——C25 取自 arXiv 2311.10990（CC BY 4.0）Fig.3，C39 取自 arXiv 2502.03447（CC BY-SA 4.0）Fig.3，C40 取自作者公开的 IEEE VR 2025 camera-ready PDF 首图；`profile/xintong.html` 对应占位块换成图片，仍缺图的只剩 C33/C34/C36。
- 修复：`projects_collection/PixelMap.html` 的 Publication 按钮与区块原先引用的是 RedCapes / Dementia 两篇论文的 DOI（且被注释掉），改为 PixelMap 自己的论文 `10.1145/3758871.3758902` 并启用；`projects_collection/virtual_human_for_ASD.html`（Glitter）的 Publication 按钮原先链到 Twilight Rohingya 的 IEEE 页面，改为 Glitter 论文 `10.1080/10447318.2026.2659953`。两个 DOI 均已验证可解析。
- 修改：论文标题以 Crossref 登记的正式发表标题为准（`title` + `subtitle` 合并），修正 CV 中与正式版不一致的 10 篇（C56、C53、C43、C39、C31、C30、C29、C28、C26、C17），Paper Awards 区块同步；站内 21 个项目页所引用的 DOI 与本列表逐一吻合。
- 资源：`images/xin.jpg` 替换为新证件照（居中裁成 900×900 JPEG，约 117 KB，原图 260×260）；该文件名被 48 处引用，覆盖同名即全站生效。
- 文档：`docs/PEOPLE_LINKS.md` 同步 Lab Director 链接。
- 重构：`people.html` Members 区按 Lab Director / PhD Students（2024 Fall、2025 Spring、2025 Fall、2026 Spring、2026 Fall cohort）/ MPhil Students（2025 Fall、2026 Fall cohort）/ Research Assistants 分组重排（各组内按入学时间先后排列），PhD 卡片标注 co-mentor / co-supervised 信息；新增 `people-group-title`、`people-cohort-title` 分组标题（仅用 Bootstrap 工具类，未改 SCSS）。
- 新增：13 个占位个人页 `profile/{junrong,yuying,liyi,qiuju,bingqian,jiansheng,anastasia,yihu,yiying,fangze,xintan,xinyuan,haijia}.html`，头像统一用 `images/null.jpg`，待补资料后替换；Haijia Li、Bingqian Wang 的简介与头像（`images/haijia.webp`、`images/bingqian.webp`）已补充，Bingqian Wang 个人页附 CV 链接；Xinyuan Lan 的简介与头像（`images/xinyuan.webp`）已补充；新增 Research Assistant Jiale Liu（`profile/jiale.html`、`images/jiale.webp`）。
- 调整：Primo Pan、Haoxuan Wang、Yizhi Song、Yinghao Gao（2024 Fall MPhil）、Yixuan Li、Jingyang Lin（RA 2024–2025）、Shan Luo（RA 2025）、Liwen He（Visiting PhD Student）迁入 Alumni，身份更正为清华大学未来实验室设计学博士生（原写北航工业设计），并链接其实验室主页；Huanyi Wan 由 RA 改为 2026 Fall MPhil（同步 `profile/huanyi.html`）。
- 文档：`docs/PEOPLE_LINKS.md` 按新分组重写 Members 列表并补全 Alumni 链接。
- 修正：Qiuju Chen 调整为 PhD 2025 Fall cohort，Liyi Xie 调整为 PhD 2026 Spring cohort（`people.html`、`docs/PEOPLE_LINKS.md`）。
- 修正：Junrong “Vicki” Song、Yuying Wan 调整为 PhD 2024 Fall cohort（新增该 cohort 分组）。
- 调整：Liwen He 从 Alumni 移回 Members 的 Research Assistants 组并置于该组首位，身份为 Visiting PhD Student（清华大学未来实验室）。
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




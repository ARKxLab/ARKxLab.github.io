## ARK Lab Project 信息采集问卷（用于 projects 与项目详情页）

说明：本问卷用于生成/更新 `projects.html` 中的项目卡片与 `projects_collection/<slug>.html` 项目详情页。请按需填写，标注为“必填”的字段请务必提供。

### 1. 基本信息（必填）
- 项目英文标题（与论文标题一致或对外展示用）：
- 项目中文标题（可选）：
- 项目 slug（小写短横线命名，示例：`vr-raise-your-eyebrows`）：
- 项目封面图片：
  - 文件名（放 `images/` 目录，如 `VR_Raise_Your-Eyebrows.png`）：
  - 图片替代文本 alt：

### 2. 分类与标签（必填）
- 项目状态：Complete / Ongoing（二选一）
- 主题标签（可多选）：VRAR / AI / CH（Cultural Heritage）/ Access（Accessibility）/ Health / Games / Robots / Social / Children / Others
- 年份（如 2025）：
- 展示区域（可选，默认半宽）：全宽展示（是/否）

说明：`projects.html` 中，卡片使用 `filter-column <status> <tags> [full-width]` 的类进行筛选与布局。

### 3. 列表卡片信息（用于 projects.html，必填）
- 卡片上方小标签（如 CHI / CHI EA / CSCW / IJHCI / Project / arXiv / Ongoing）：
- 卡片主标题（若与项目标题不同可单独指定）：
- 卡片副文本（蓝色，通常为 venue 或卷期信息，如 “CHI '25 ...”）：
- 卡片作者（按论文或团队署名顺序）：
- 卡片按钮：
  - Project 链接（站内，固定为 `projects_collection/<slug>.html`）：
  - Publication 链接（可选，DOI/ACM/arXiv）：

### 4. 项目详情页（`projects_collection/<slug>.html`）内容（必填）
- 页面标题（通常与项目英文标题一致）：
- 作者列表（逗号分隔，显示顺序与论文一致）：
- 摘要/项目简介（200–400 字；若有论文摘要可粘贴，注意换行）：
- 论文/外链按钮（可多条）：
  - 名称（如 Publication / PDF / Demo / Code）：
  - URL：
- 可选媒体（建议至少一项）：
  - 视频嵌入（YouTube 链接或 iframe 嵌入信息）：
  - 关键图（放在 `projects_collection/projects_img/<slug>/` 目录，多张可列）：
  - 图文小节（如 Context / Design / User Study / Results 等，每节包含小标题与 1–2 张图片）：

说明：仓库中现有多个项目页包含注释掉的示例段落（如 Context / Game Design / User Study / Results），可按需启用或增改。

推荐章节结构（参考 `projects_collection/Pureland.html`）：
- Introduction：项目背景与目标，1–2 段 + 1 张配图
- Experience Design（或 Method / System / Design）：设计目标、方法清单（可用要点列表）+ 1–2 张配图
- Conclusions（或 Findings / Discussion）：核心发现与结论，1 段
- Publication Links：按钮区可包含 PDF / Publication / Video（YouTube）等多个按钮
  - 若提供视频，优先给出可嵌入的 YouTube 链接；无法外链时提供占位图与说明

### 5. 关联与鸣谢（可选）
- 相关 People（在 `people.html` 中的姓名，便于后续联动展示）：
- 资助/项目来源（基金、合作单位等）：

### 6. 授权与版权（必填）
- 我确认已获授权可在实验室官网展示与本项目相关的图片、摘要、视频及论文链接（是/否）：
- 图片/视频版权与来源（如：作者/拍摄者/许可协议）：

### 7. 其他（可选）
- 演示/代码链接（GitHub/网站）：
- 备注：

---

填表规范与命名建议：
- 封面图尺寸建议 1200×800 或接近 3:2，体积≤800KB；放置于 `images/` 目录。
- 详情页配图统一放在 `projects_collection/projects_img/<slug>/` 下，命名清晰（如 `flowchart.png`、`study-dia.png`）。
- 标签与状态需与 `projects.html` 现有筛选按钮一致；如新增标签，请注明新增项以便同步更新筛选按钮与样式。

附：按钮与媒体清单（勾选所有适用项并填写 URL）
- [ ] Publication（DOI/ACM）URL：
- [ ] PDF 直链 URL：
- [ ] Video（YouTube）URL：
- [ ] Demo / Code / Dataset URL：


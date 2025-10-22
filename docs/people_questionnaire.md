## ARK Lab People 信息采集问卷（用于 people 与 profile 页面）

说明：本问卷用于生成/更新 `people.html` 列表卡片与 `profile/xxx.html` 个人详情页。请按需填写，标注为“必填”的字段请务必提供。

### 1. 基本信息（必填）
- 英文全名：
- 中文姓名（可选）：
- Preferred name / Nickname（可选）：
- Pronouns（可选）：
- 角色/身份（选择其一）：Lab director / Faculty / PhD Student / MPhil Student / Research Assistant / Alumni / Collaborator（DKU / External）
- 所属机构（如 HKUST(GZ)、DKU 等）：
- 联系邮箱（默认不展示在卡片，可选在个人页展示）：
- 个人主页 URL（可选，如 Google Scholar/个人网站）：

### 2. 页面分组与排序（必填）
- 页面分组（选择其一）：Members / DKU Collaborators / External Collaborators / Alumni
- 排序优先级（整数，数值越小越靠前，建议 0–100）：

### 3. 列表卡片信息（用于 people.html，必填）
- 卡片头衔/角色标签（显示在姓名上方，如 “PhD Student”）：
- 卡片显示姓名（通常与英文全名一致）：
- 卡片简介（50–100 英文词或 80–180 中文字，1–3 句）：
- 头像图片：
  - 文件名（建议放置于 `images/` 目录，如 `firstname_lastname.jpg`）：
  - 图片替代文本 alt（用于无障碍与 SEO）：
- 个人页链接类型：站内 profile / 站外 external（二选一）
  - 若为站内：目标路径 `profile/<slug>.html`（示例：`profile/john-doe.html`）
  - 若为站外：完整 URL（含 `https://`）

备注：people 列表卡片需要“头像、头衔、姓名、简介、跳转链接”五项核心元素。

### 4. 个人详情页（`profile/xxx.html`）扩展信息（可选但强烈推荐）
- 页面 slug（小写短横线命名，字母数字与 `-`，如 `john-doe`）：
- 顶部个人介绍（150–300 字，中英文均可，用于页首大图右侧）：
- 个人网站按钮：
  - 按钮文字（如 “Website”）：
  - 按钮链接 URL：
- 研究方向/关键词（3–8 个，逗号分隔）：
- 社交/学术链接（可多填）：
  - Google Scholar：
  - LinkedIn：
  - GitHub：
  - ORCID：
- 选定项目（用于 “Selected Projects”，最多 3 个）：
  1) 项目 1：
     - 关联现有项目页？（是/否）。若“是”，请提供 `projects_collection/<slug>.html` 或标题
     - 卡片简述（1–2 句）：
  2) 项目 2：同上
  3) 项目 3：同上
- Publications（用于 “Recent Papers”，可列 3–6 条）：
  - 每条包含：标题、Venue/会议期刊、年份、可选链接（DOI/ACM/arXiv/PDF）

### 5. 媒体与授权（必填）
- 我确认已获授权可在实验室官网展示我的头像与文字信息（是/否）：
- 是否同意在个人详情页展示邮箱（是/否）：
- 头像/图片版权与来源（如：本人提供/拍摄者姓名/许可协议）：

### 6. 其他（可选）
- 语言偏好（用于页面主要语言呈现与排序参考）：
- 其他备注：

---

填表规范与命名建议：
- 图片请尽量裁剪为 1:1 或 3:4，分辨率≥800px 边长，放置于 `images/` 目录。
- 个人页 `slug` 建议与英文名一致的小写短横线写法；如存在重名，可追加学位或入学年份。
- 简介与介绍尽量简洁有力，避免换行过多；英文注意大小写与标点。


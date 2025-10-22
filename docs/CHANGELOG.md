# 更新日志（Changelog）

本文档用于记录站点内容与结构的变更，便于追踪维护历史。

## 书写规范
- 条目结构：日期（UTC+8） + 变更要点（动词开头的短句）。
- 变更类型建议：新增、修复、修改、重构、文档、测试、构建/部署、其它。
- 建议每次合并/发布时追加一节，必要时可附带关联文件列表。

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




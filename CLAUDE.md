# CLAUDE.md — ARK Lab 官网仓库 Agent 规范

## 项目是什么
纯静态站点（原生 HTML/CSS/JS + Bootstrap 5），无构建步骤、无 Node 依赖、无后端。详见 `README.md`；发布流程与托管拓扑详见 `docs/RELEASE_PROCESS.md`（**动手前先读**）。

## 托管与发布（必须知道的事实）
- 唯一发布源：`origin/gh-pages`。**`gh-pages` 是默认分支，`main` 已废弃，不要碰。**
- push 到 `gh-pages` = 同时发布到两个线上环境：GitHub Pages（https://arkxlab.github.io/）和 Cloudflare Workers（https://arklab-hkustgz.com/，由 Workers Builds 自动构建）。没有单独"推到服务器"的步骤。
- 视频/大文件在腾讯云 COS（`download.arklab-hkustgz.com`），不在仓库里，Agent 无法上传；只能引用已存在的 URL。

## Agent 行为规则
1. **不要主动 commit / push。** 只有用户明确要求时才提交；push 需要用户逐次确认，因为 push 即上线。绝不 `push --force`、绝不 `reset --hard` 远端。
2. **改链接前先验证链接可用。** 任何新增/修改的外部 URL（论文、视频、个人主页、COS 资源）先用 `curl -sI` 确认返回 200/206/301，404 的链接不要写进页面；若用户提供的 URL 还不可用，明确告知并暂缓提交。
3. **改 SCSS 必须同时产出 `css/style.css`。** 仓库提交的是编译产物；Agent 环境里通常没有 Prepros，如果只能改 SCSS 而无法编译，要明确告诉用户需要本地用 Prepros 编译后再提交。
4. **文件名大小写严格一致。** 线上是 Linux，本地是 Windows；引用路径必须与真实文件名大小写完全一致。
5. **不要添加 > 25 MB 的文件**（Cloudflare 单文件上限 25 MiB），不要提交 `.DS_Store`、`.idea/`、`.vs/`、临时文件。大文件应提示用户放到 COS。
6. **不要引入构建工具链**（package.json、bundler、框架）——站点的设计前提是零构建、任意静态服务器可托管。
7. **不要修改 `wrangler.toml` 的 `name`**，不要删除 `.assetsignore` 中的条目。新增不应公开的源文件目录时，在 `.assetsignore` 中追加。
8. **仓库内容全部公开**（GitHub Pages 会原样暴露所有文件）。不要写入任何密钥、内部联系方式以外的隐私信息。
9. **完成一次内容改动后，在 `docs/CHANGELOG.md` 追加条目**（日期 + 动词开头的要点）；人员链接变更同步 `docs/PEOPLE_LINKS.md`。
10. 本地预览用 `python -m http.server 8000`，不要用 `file://`。验证页面时关注 console 报错与图片 404。

## 常用位置
- 页面：根目录 `*.html`；项目详情 `projects_collection/`；人员 `profile/`；公共片段 `includes/`
- 样式：`scss/` → `css/style.css`；脚本：`js/custom.js`
- 文档：`docs/RELEASE_PROCESS.md`（发布）、`docs/CHANGELOG.md`、`docs/PEOPLE_LINKS.md`、`docs/*_questionnaire.md`（内容收集表）
- 提交信息风格：`feat(people): ...` / `fix(projects): ...` / `docs: ...` / `chore: ...`

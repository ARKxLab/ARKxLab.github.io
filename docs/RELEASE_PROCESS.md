# 发布流程（Release Process）

> 最后核实：2026-08-22。本文档描述 ARK Lab 官网**实际**的托管拓扑与发布流程，供人类维护者与 AI Agent 共同遵循。
> 如果托管方式发生变化（换域名、换分支、新增 CI），请同步更新本文档、`README.md` 与根目录 `CLAUDE.md`。

---

## 1. 托管拓扑（现状）

本站是纯静态站点，**只有一个发布源**：GitHub 仓库 `ARKxLab/ARKxLab.github.io` 的 `gh-pages` 分支。两个线上环境都从这个分支自动部署，**不存在手动"推到服务器"的步骤**。

| 环境 | 访问地址 | 部署方式 | 触发条件 |
|---|---|---|---|
| GitHub Pages | https://arkxlab.github.io/ | GitHub Pages（legacy build，源：`gh-pages` 分支 / 根目录 `/`） | push 到 `gh-pages` 后自动构建，通常 1 分钟内生效 |
| Cloudflare Workers（静态资源模式） | https://arklab-hkustgz.com/ （`www.` 301 跳转到裸域） | Cloudflare **Workers Builds** 通过 GitHub App 绑定本仓库，Worker 名 `arklab`，配置见 `wrangler.toml` | push 到 `gh-pages` 后自动构建；每个 commit 在 GitHub 上会出现 `Workers Builds: arklab` 的 check-run |
| 腾讯云 COS（大文件/视频） | https://download.arklab-hkustgz.com/ | **不在本仓库内**，由维护者通过 COS 控制台 / coscli 手动上传 | 与代码发布无关，需单独上传 |

要点：
- **默认分支是 `gh-pages`**，不是 `main`。`main` 分支已废弃（落后 `gh-pages` 100+ 个提交），不要往 `main` 提交或合并。
- 仓库没有 GitHub Actions workflow 文件（`.github/` 不存在）；GitHub 上看到的 `build` / `deploy` check-run 是 GitHub Pages 内置的构建，不需要维护。
- `gh-pages` 没有分支保护，任何有写权限的人 push 即等于发布到两个线上环境。**push 之前务必在本地验证。**
- Cloudflare 侧 `.assetsignore` 排除了 `scss/`、`wrangler.toml`、`prepros-6.config` 等源文件，所以 `https://arklab-hkustgz.com/scss/style.scss` 返回 404；而 GitHub Pages 会原样公开仓库内所有文件（`https://arkxlab.github.io/scss/style.scss` 返回 200）。**不要把任何敏感内容提交进仓库。**
- Cloudflare Workers 静态资源限制：单文件 ≤ 25 MiB，文件总数 ≤ 20,000。当前仓库约 660 个文件，最大文件 ~9 MB。视频等大文件一律放 COS，不进仓库。

## 2. 标准发布流程

```
本地修改 → 本地预览验证 → 自检清单 → commit → push origin gh-pages
        → GitHub Pages 自动部署 ┐
        → Cloudflare 自动构建    ┘→ 线上验证两个地址 → 追加 CHANGELOG
```

### 2.1 本地修改
- 页面：直接改对应 HTML。公共片段在 `includes/`（header/footer），但多数页面是内联导航，改导航时需要全局搜索确认。
- 样式：改 `scss/`，用 Prepros（`prepros-6.config`）编译到 `css/style.css`。**`css/style.css` 是提交到仓库的产物**，改了 SCSS 必须把编译后的 CSS 一起提交，否则线上不会变。
- 脚本：`js/custom.js`。
- 图片：放 `images/` 或各项目目录；先压缩（参考提交 `96724ee compress images`），单图尽量 < 1 MB。
- 视频/大文件：上传到 COS `download.arklab-hkustgz.com`，页面里只引用 URL。

### 2.2 本地预览
仓库无需 Node/构建步骤。在仓库根目录起一个静态服务器即可：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。不要直接用 `file://` 打开，会有跨页/跨域问题。

### 2.3 自检清单（push 前必做）
- [ ] 改动的每个页面在本地打开过，无布局错乱、无 console 报错。
- [ ] 新增/修改的**所有外部链接**（论文、视频、个人主页、COS 资源）都实际可访问：`curl -sI <url>` 返回 200/206/301。尤其是 COS 上的视频：先确认文件已上传，再改页面引用。
- [ ] 新增的图片/文件路径大小写与引用一致（线上是 Linux，大小写敏感；Windows 本地不敏感，容易漏）。
- [ ] 没有引入 > 25 MB 的文件；没有提交 `.DS_Store`、IDE 文件、本地临时文件。
- [ ] 如果改了 SCSS，`css/style.css` 已重新编译并一起提交。
- [ ] `git diff --stat` 只包含预期文件。

### 2.4 提交与推送
- 提交信息沿用仓库现有风格：`feat(people): ...` / `fix(projects): ...` / `docs: ...` / `chore: ...`，中英文皆可。
- 直接推送：

```bash
git push origin gh-pages
```

- 外部协作者（非 org 成员）走 fork → PR to `gh-pages` 的方式（历史上 PrimoPan 的 PR #1~#3 即如此）。涉及大范围重构、改导航/首页的改动，建议即使是成员也开 PR 让另一人过目。
- **禁止 `git push --force` 到 `gh-pages`**：两个线上环境都跟着这个分支走，强推会直接改写线上历史。

### 2.5 线上验证
push 后等 1~2 分钟，分别检查两个环境（以 `people.html` 为例）：

```bash
curl -sI https://arkxlab.github.io/people.html | grep -iE "^(HTTP|last-modified)"
```

```bash
curl -sI https://arklab-hkustgz.com/people.html | grep -iE "^(HTTP|server|cf-ray)"
```

- GitHub Pages：`Last-Modified` 应更新到刚才的时间。
- Cloudflare：到 GitHub 仓库的 commit 页面看 `Workers Builds: arklab` 是否为绿色 ✓；失败时点进 details 看 Cloudflare Dashboard 的构建日志。
- 浏览器带缓存，验证时用无痕窗口或 `Ctrl+F5`。

### 2.6 记录
每次发布后在 `docs/CHANGELOG.md` 追加一节（日期 + 变更要点）。涉及人员链接的改动同步 `docs/PEOPLE_LINKS.md`。

## 3. 回滚
发现线上问题时，用 `revert` 生成新提交再 push，两个环境会自动重新部署：

```bash
git revert <bad-commit> --no-edit
```

```bash
git push origin gh-pages
```

不要用 `reset --hard` + 强推。

## 4. 常见故障

| 现象 | 原因 / 处理 |
|---|---|
| GitHub Pages 更新了，Cloudflare 没更新 | 看 commit 的 `Workers Builds: arklab` check-run。常见原因：引入了 > 25 MiB 文件、`wrangler.toml` 被误改。修正后再 push 一次即可重新触发。 |
| 本地正常，线上图片 404 | 文件名大小写不一致；或者文件没有 `git add`。 |
| 视频无法播放 | COS 上的文件还没上传，或 URL 写错。先 `curl -sI` 确认 200/206。 |
| 样式改了线上没变 | 只改了 `scss/` 没提交编译后的 `css/style.css`。 |
| `Workers Builds` 在旧提交上显示失败 | `wrangler.toml` 加入之前的历史提交会失败，属正常，忽略。 |

## 5. 相关配置文件

- `wrangler.toml`：Cloudflare Worker 配置（`name = "arklab"`，`[assets] directory = "."`）。不要改 `name`，否则 Workers Builds 会对应不上现有 Worker。
- `.assetsignore`：Cloudflare 上传静态资源时的排除列表（类似 `.gitignore`）。新增不应公开的源文件目录时在这里追加。
- `.gitignore`：本地忽略列表。
- `prepros-6.config`：Prepros 的 SCSS 编译配置。

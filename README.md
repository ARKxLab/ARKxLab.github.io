## ARKxLab.github.io（ARK Lab 官方网站）

本仓库为 ARK Lab 实验室的官网源码。站点为纯静态页面，使用原生 HTML/CSS/JS 与 Bootstrap 5 生态构建，可直接托管在 GitHub Pages 或任意静态服务器。

### 技术栈与依赖
- **框架/样式**: 原生 HTML + CSS，Bootstrap 5（已编译 CSS 在 `css/`）
- **动效/组件**:
  - AOS（滚动动画，`js/aos.js`，`css/aos.css`）
  - Tiny Slider（轮播，`js/tiny-slider.js`，`css/tiny-slider.css`）
  - GLightbox（灯箱，`js/glightbox.min.js`，`css/glightbox.min.css`）
  - Rellax（视差滚动，`js/rellax.min.js`）
  - 自定义脚本（预加载、菜单克隆、轮播初始化等，见 `js/custom.js`）
- **图标与字体**: Icomoon、Feather 图标（`fonts/`），Google Fonts（在各页面 `<head>` 引用）
- **样式编译**: 使用 Prepros（配置文件 `prepros-6.config`）对 `scss/` 源码进行编译，输出到 `css/style.css`

### 目录结构（关键项）
- `index.html`：首页与导航示例，包含 Hero、精选项目等区块
- `projects.html`：项目汇总页
- `people.html`：成员/团队页
- `publications.html`：论文/出版物页（如需要再完善）
- `perspective_stu.html`：招新/申请说明页
- `Online_Sign_Language.html`、`contact.html`：专题与联系页面
- `projects_collection/`：每个项目的独立详情页（HTML 文件）与配图
- `profile/`：个人/成员简介页面（HTML 文件）
- `includes/`：可复用片段（如 `header-default.html`、`header-dark.html`、`footer.html`）
- `css/`：编译后样式（含 Bootstrap 与站点样式 `style.css`）
- `scss/`：SCSS 源码，建议从这里修改并用 Prepros 编译
- `js/`：前端脚本（Bootstrap Bundle、AOS、Tiny Slider、GLightbox、Rellax、自定义脚本等）
- `images/`：站点静态资源（背景、项目封面、人员头像、二维码等）
- `fonts/`：Icomoon 与 Feather 字体与样式
- `favicon.png`：站点 Favicon
- `docs/`：项目相关文档

### 本地预览与开发
本项目为纯静态站点，无需 Node/后端环境。

1) 预览方式（任选其一）
- 直接用浏览器打开 `index.html`（注意相对路径下的跨页导航是否受浏览器安全策略影响）
- 使用 VS Code 的 Live Server 插件或任意本地 HTTP 服务器，指向仓库根目录

2) 修改样式（SCSS 编译）
- 推荐在 `scss/` 下进行样式修改，入口为 `scss/style.scss`
- 使用 Prepros（已提供 `prepros-6.config`）：
  - 打开 Prepros，将项目根目录加入，确认 `scss/style.scss` 处于监听与编译状态
  - 确保 `scss/bootstrap/bootstrap.scss` 等条目已开启强制编译（配置内已设置），输出为 `css/style.css`
  - 保存 SCSS 后，Prepros 将自动编译并刷新浏览器（如启用 Live Reload）

3) 修改脚本
- 所有自定义逻辑集中在 `js/custom.js`
  - 预加载遮罩移除（`preloader`）
  - AOS、Rellax 初始化
  - 可选的倒计时组件（依赖页面包含 `.js-countdown` 才会生效）
  - Tiny Slider/GLightbox 初始化（若页面包含相应容器才会生效）

### 复用片段（Header/Footer）
- 片段位于 `includes/`：`header-default.html`、`header-dark.html`、`footer.html`
- 在某些页面（例如 `index.html`）预留了通过 `fetch` 注入 Header 的脚本：
  - 如需启用，请在页面中放开 `<!-- <div id="header-placeholder"></div> -->` 的注释，并确保脚本中 `document.getElementById('header-placeholder')` 能找到对应元素
  - 当前 `index.html` 已内联导航条，`fetch` 注入可二选一，避免重复导航

### 新增/更新内容的建议流程
- 新增项目：
  1. 在 `projects_collection/` 下复制一份现有项目 HTML 并改名
  2. 替换项目配图到 `images/` 或 `images/project_bg/`
  3. 在 `projects.html`（或首页精选区块 `index.html`）添加入口卡片与链接
- 新增成员：
  1. 在 `profile/` 下新增个人页面（可参考现有模版文件）
  2. 在 `people.html` 添加头像、姓名、职位、链接等信息
- 修改导航/底部：
  - 推荐在 `includes/` 中统一维护，所有页面引用相同片段，降低维护成本

### 部署（GitHub Pages）
- 仓库名为 `ARKxLab.github.io`，可直接使用用户/组织主页方式部署
- 步骤：
  1. 将更新推送至 `master`/`main`（以仓库默认分支为准）
  2. 在 GitHub 仓库的 Settings → Pages 中，选择部署分支为默认分支，目录为根目录 `/`
  3. 等待 GitHub Pages 构建完成，即可通过 `https://<org-or-user>.github.io/` 访问
- 如需自定义域名：
  - 在仓库根目录添加 `CNAME` 文件（内容为自定义域名）
  - 在域名 DNS 处配置 A/ALIAS 或 CNAME 指向 GitHub Pages

### 常见问题（FAQ）
- 本地直接打开 HTML 跨页时资源加载异常？
  - 建议用本地 HTTP Server 或 Live Server 预览，避免浏览器本地文件协议的跨域限制
- 动画/轮播未生效？
  - 确认页面存在相应容器与 class/id（如 `#testimonial`、`.glightbox`），且脚本文件已在页面底部按顺序引入
- Header 注入报错 `Cannot read property 'innerHTML' of null`？
  - 确保页面存在 `id="header-placeholder"` 的占位元素，或禁用该注入脚本（已内联导航则不需要注入）

### 版权与致谢
- 图片、Logo 与项目信息归 ARK Lab 及各作者/供稿人所有
- 前端主题与组件参考自开源生态（AOS、Tiny Slider、GLightbox、Rellax、Bootstrap 等）

### 维护者
- ARK Lab Web 维护团队

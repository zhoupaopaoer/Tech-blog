# Astro 静态个人博客

一个面向个人写作场景的静态博客系统，使用 `Astro` 构建，可部署到 `GitHub Pages` 与 `Cloudflare Pages`。

## 1. 项目特点

- Markdown 写作，文章放在 `src/content/blog/`
- 首页、归档页、文章详情页、标签页
- 内置 RSS 与 sitemap
- GitHub Pages 自动部署工作流
- Cloudflare Pages 零服务端静态部署

## 2. 本地开发

先安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

构建生产包：

```bash
npm run build
```

## 3. 内容管理

站点基础信息在 `src/config/site.ts`：

- 站点标题
- 描述
- 导航
- 社交链接

文章在 `src/content/blog/`，每篇文章都是一个 Markdown 文件，例如：

```md
---
title: "文章标题"
description: "摘要"
pubDate: 2026-04-26
tags:
  - Astro
  - Blog
draft: false
---

这里写正文。
```

## 4. 部署到 GitHub Pages

这是最省事的公开访问方案。

### 仓库准备

1. 把项目推到 GitHub 仓库。
2. 仓库默认分支使用 `main`。
3. 打开 GitHub 仓库 `Settings -> Pages`。
4. `Source` 选择 `GitHub Actions`。

### 可选环境变量

建议在仓库 `Settings -> Secrets and variables -> Actions -> Variables` 里添加：

- `SITE_URL`

示例：

```text
https://yourname.github.io/blog-repo
```

如果是用户主页仓库 `yourname.github.io`，则填：

```text
https://yourname.github.io
```

工作流文件已经在 `.github/workflows/deploy.yml` 中配置完成。推送到 `main` 后会自动构建并发布。

### 首次发布后访问地址

- 项目仓库：`https://你的用户名.github.io/仓库名/`
- 用户主页仓库 `yourname.github.io`：`https://yourname.github.io/`

## 5. 部署到 Cloudflare Pages

在 Cloudflare Pages 新建项目并连接 GitHub 仓库，然后使用以下配置：

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20`

建议在 Cloudflare Pages 的环境变量里设置：

- `SITE_URL=https://your-pages-domain.pages.dev`

如果绑定了自定义域名，则写成你的正式域名：

```text
https://blog.example.com
```

### 首次发布后访问地址

- 默认域名：`https://项目名.pages.dev`
- 绑定自定义域后：你的正式域名

## 6. 为公开访问建议补齐的生产项

- 把 `src/config/site.ts` 里的站点标题、作者、社交链接换成你自己的信息
- 在平台环境变量里设置正确的 `SITE_URL`
- 发布前删除示例文章，换成你自己的内容
- 使用自定义域名，提高可记忆性和品牌感
- 如果重视收录，尽快把站点提交到 Google Search Console 和 Bing Webmaster Tools
- 如需统计访问，后续可接 Cloudflare Web Analytics 或 Google Analytics

## 7. GitHub Pages 与 Cloudflare Pages 的选择

### 选 GitHub Pages

适合：

- 博客代码已经托管在 GitHub
- 需求简单，追求免费与稳定
- 不需要细粒度边缘能力

### 选 Cloudflare Pages

适合：

- 想要更好的全球 CDN 体验
- 后续可能加自定义域、重定向、边缘函数
- 希望托管能力比 GitHub Pages 更灵活

## 8. 如果你想改成 Hugo

这个目录当前已经落成 `Astro` 版本，因为它更适合作为后续可扩展的博客骨架。如果你要我继续，我可以下一步直接补一份：

- `Hugo` 对应目录结构
- `PaperMod` 或自定义主题方案
- GitHub Pages / Cloudflare Pages 的 Hugo 部署配置

---
title: "用 Astro 搭建第一篇博客"
description: "从零开始初始化一个可部署到 GitHub Pages 和 Cloudflare Pages 的个人博客。"
pubDate: 2026-04-26
tags:
  - Astro
  - 静态博客
  - GitHub Pages
---

Astro 适合搭建内容型网站，原因很直接：

- 默认输出静态 HTML，页面轻。
- Markdown 内容管理简单。
- 部署到 GitHub Pages、Cloudflare Pages 这类静态托管平台成本低。

这套博客骨架已经包含：

- 首页与文章列表页
- Markdown 文章详情页
- 标签页与 RSS
- GitHub Pages 自动部署工作流

接下来你只需要继续往 `src/content/blog/` 里写 Markdown 文件即可。

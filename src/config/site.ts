export const siteConfig = {
  title: "Zhou's Notes",
  description: "一个用 Astro 构建、可部署到 GitHub Pages 和 Cloudflare Pages 的静态个人博客。",
  author: "Zhou",
  lang: "zh-CN",
  nav: [
    { href: "/", label: "首页" },
    { href: "/blog", label: "文章" },
    { href: "/about", label: "关于" }
  ],
  socialLinks: [
    { href: "https://github.com/yourname", label: "GitHub" },
    { href: "https://x.com/yourname", label: "X / Twitter" }
  ]
} as const;

export const siteConfig = {
  title: "Zhou's Notes",
  description: "记录产品、技术和日常思考的个人数字花园。",
  author: "Zhou",
  lang: "zh-CN",
  profile: {
    name: "Zhou",
    tagline: "Builder, learner, note-taker.",
    bio: "这里是我的个人博客，主要记录前端、AI、效率工具和学习过程中的真实想法。",
    location: "China",
    email: "hello@example.com"
  },
  announcement: {
    title: "站点公告",
    content: "博客正在持续迭代中。后续会补更多原创文章、项目记录和工具实践。"
  },
  nav: [
    { href: "/", label: "首页" },
    { href: "/blog", label: "文章" },
    { href: "/search", label: "搜索" },
    { href: "/archive", label: "归档" },
    { href: "/guestbook", label: "留言" },
    { href: "/about", label: "关于" }
  ],
  socialLinks: [
    { href: "https://github.com/zhoupaopaoer", label: "GitHub" },
    // { href: "https://x.com/yourname", label: "X / Twitter" }
  ],
  quickLinks: [
    { href: "/blog", label: "最近文章" },
    { href: "/archive", label: "历史归档" },
    { href: "/guestbook", label: "给我留言" }
  ]
} as const;

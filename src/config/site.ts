export const siteConfig = {
  title: "Zhou's Notes",
  description: "记录产品、技术和日常思考的个人数字花园。",
  author: "Zhou",
  lang: "zh-CN",
  profile: {
    name: "Zhou",
    tagline: "乐于探索互联网新技术，程序开发者",
    bio: "这里主要分享技术博客、效率工具、AI 应用和个人项目记录，希望把零散的学习过程沉淀成有用的内容。",
    location: "China",
    email: "hello@example.com",
    avatar: "/images/avatar-sunset.svg"
  },
  homeHero: {
    image: "/images/hero-mountains.svg",
    title: "Zhou 的技术小站",
    subtitle: "记录学习、开发与持续探索",
    categories: ["技术搭建", "写作系统", "关于我"]
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
    { href: "mailto:hello@example.com", label: "Email" },
    { href: `${"/rss.xml"}`, label: "RSS" }
  ],
  quickLinks: [
    { href: "/blog", label: "最近文章" },
    { href: "/archive", label: "历史归档" },
    { href: "/guestbook", label: "给我留言" }
  ]
} as const;

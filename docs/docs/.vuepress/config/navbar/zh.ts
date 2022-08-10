import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarZh: NavbarConfig = [
  {
    text: "指南",
    link: "/zh/guide/",
    children: [
      "/zh/guide/README.md",
      "/zh/guide/getting-started.md",
      "/zh/guide/configuration.md",
      "/zh/guide/supported.md"
    ]
  }
];

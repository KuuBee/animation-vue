import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarEn: NavbarConfig = [
  {
    text: "Guide",
    link: "/guide/",
    children: [
      "/guide/README.md",
      "/guide/getting-started.md",
      "/guide/configuration.md",
      "/guide/supported.md"
    ]
  }
];

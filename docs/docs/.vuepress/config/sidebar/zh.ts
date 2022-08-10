import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarZh: SidebarConfig = {
  "/zh/guide/": [
    {
      text: "指南",
      children: ["/zh/guide/README.md", "/zh/guide/getting-started.md"]
    }
  ]
};

import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarEn: SidebarConfig = {
  "/guide/": [
    {
      text: "Guide",
      children: [
        "/guide/README.md",
        "/guide/getting-started.md",
        "/guide/configuration.md",
        "/guide/supported.md"
      ]
    }
  ]
};

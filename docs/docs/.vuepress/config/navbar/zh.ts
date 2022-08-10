import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarZh: NavbarConfig = [
  {
    text: "导航",
    link: "/guide/"
  },
  {
    text: "Reference",
    children: [
      {
        text: "VuePress",
        children: [
          {
            text: "CLI",
            link: "/reference/cli.html"
          },
          "/reference/config.md",
          "/reference/frontmatter.md",
          "/reference/components.md",
          "/reference/plugin-api.md",
          "/reference/theme-api.md",
          "/reference/client-api.md",
          "/reference/node-api.md"
        ]
      },
      {
        text: "Bundlers",
        children: [
          "/reference/bundler/vite.md",
          "/reference/bundler/webpack.md"
        ]
      },
      {
        text: "Default Theme",
        children: [
          "/reference/default-theme/config.md",
          "/reference/default-theme/frontmatter.md",
          "/reference/default-theme/components.md",
          "/reference/default-theme/markdown.md",
          "/reference/default-theme/styles.md",
          "/reference/default-theme/extending.md"
        ]
      }
    ]
  }
];

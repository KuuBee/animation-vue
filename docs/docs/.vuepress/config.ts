import { defaultTheme, defineUserConfig } from "vuepress";
import { navbarEn } from "./config/navbar/en";
import { sidebarEn } from "./config/sidebar/en";


export default defineUserConfig({
  lang: "EN",
  title: "Vue.Animate.css",
  description: "Vue.Animate.css",
  theme: defaultTheme({
    locales: {
      "/": {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // page meta
        editLinkText: "Edit this page on GitHub"
      }
    }
  })
});

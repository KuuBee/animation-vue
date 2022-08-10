import { defaultTheme, defineUserConfig } from "vuepress";
import { navbarEn, navbarZh } from "./config/navbar";
import { sidebarEn, sidebarZh } from "./config/sidebar";

export default defineUserConfig({
  lang: "EN",
  title: "Vue.Animate.css",
  description: "Vue.Animate.css",
  locales: {
    "/": {
      lang: "en-us",
      title: "Vue.Animate.css",
      description: "Vue directive implement for Animate.css"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Vue.Animate.css",
      description: "基于 Vue 指令实现的 Animate.css"
    }
  },
  theme: defaultTheme({
    locales: {
      "/": {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        selectLanguageName: "English"
      },
      "/zh/": {
        // navbar
        navbar: navbarZh,
        // sidebar
        sidebar: sidebarZh,
        selectLanguageName: "简体中文"
      }
    }
  })
});

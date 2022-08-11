import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "animate.css";

import { GlobalAnimateConfig, vueAnimateCss } from "animation-vue";

const app = createApp(App);
// app.use(bounceDirective);
// app.use(flashDirective);
app.use(
  vueAnimateCss(
    GlobalAnimateConfig.init({
      duration: 370
    })
  )
);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "animate.css";

import {} from "animation-vue";
import { GlobalAnimateConfig } from "../../dist/common/config";

const app = createApp(App);
// app.use(bounceDirective);
// app.use(flashDirective);
app.use(
  vueAnimateCss(
    GlobalAnimateConfig.init({
      duration: 1000,
      delay: 1000,
      repeat: 1
    })
  )
);
app.mount("#app");

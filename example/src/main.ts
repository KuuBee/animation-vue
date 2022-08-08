import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "animate.css";

import { vueAnimateCss } from "../../dist/main";
import { GlobalAnimateConfig } from "../../dist/common/config";

const app = createApp(App);
app.use(
  vueAnimateCss(
    GlobalAnimateConfig.init({
      duration: 500
    })
  )
);
app.mount("#app");

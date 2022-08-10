import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "animate.css";

import { GlobalAnimateConfig, vueAnimateCss } from "../../lib/main";

const app = createApp(App);
// app.use(bounceDirective);
// app.use(flashDirective);
app.use(
  vueAnimateCss(
    GlobalAnimateConfig.init({
      delay: 5000,
      duration: 15000,
      repeat: "infinite"
      // repeat: 2
    })
  )
  // GlobalAnimateConfig.init({
  //   duration: 1000,
  //   delay: 1000,
  //   repeat: 1
  // })
);
app.mount("#app");

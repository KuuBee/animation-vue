import type { Plugin } from "vue";
import { GlobalAnimateConfig } from "./common/config";
import { bounce } from "./directives/bounce";
import { flash } from "./directives/flash";

export const vueAnimateCss = (config?: GlobalAnimateConfig): Plugin => ({
  install(app) {
    config?.initConfig();
    app.directive("bounce", bounce);
    app.directive("flash", flash);
  }
});
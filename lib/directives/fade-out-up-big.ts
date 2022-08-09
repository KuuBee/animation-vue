import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutUpBig = baseObjectDirective("fadeOutUpBig");
export const fadeOutUpBigDirective: Plugin = {
  install(app) {
    app.directive("fade-out-up-big", fadeOutUpBig);
  }
};
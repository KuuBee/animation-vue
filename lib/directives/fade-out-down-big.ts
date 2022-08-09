import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutDownBig = baseObjectDirective("fadeOutDownBig");
export const fadeOutDownBigDirective: Plugin = {
  install(app) {
    app.directive("fade-out-down-big", fadeOutDownBig);
  }
};
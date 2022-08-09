import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInDownBig = baseObjectDirective("fadeInDownBig");
export const fadeInDownBigDirective: Plugin = {
  install(app) {
    app.directive("fade-in-down-big", fadeInDownBig);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInRightBig = baseObjectDirective("fadeInRightBig");
export const fadeInRightBigDirective: Plugin = {
  install(app) {
    app.directive("fade-in-right-big", fadeInRightBig);
  }
};
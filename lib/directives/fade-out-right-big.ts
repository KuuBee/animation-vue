import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutRightBig = baseObjectDirective("fadeOutRightBig");
export const fadeOutRightBigDirective: Plugin = {
  install(app) {
    app.directive("fade-out-right-big", fadeOutRightBig);
  }
};
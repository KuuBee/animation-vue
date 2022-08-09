import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutRight = baseObjectDirective("fadeOutRight");
export const fadeOutRightDirective: Plugin = {
  install(app) {
    app.directive("fade-out-right", fadeOutRight);
  }
};
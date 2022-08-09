import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutBottomRight = baseObjectDirective("fadeOutBottomRight");
export const fadeOutBottomRightDirective: Plugin = {
  install(app) {
    app.directive("fade-out-bottom-right", fadeOutBottomRight);
  }
};
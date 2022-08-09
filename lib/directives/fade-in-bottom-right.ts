import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInBottomRight = baseObjectDirective("fadeInBottomRight");
export const fadeInBottomRightDirective: Plugin = {
  install(app) {
    app.directive("fade-in-bottom-right", fadeInBottomRight);
  }
};
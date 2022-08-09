import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInBottomLeft = baseObjectDirective("fadeInBottomLeft");
export const fadeInBottomLeftDirective: Plugin = {
  install(app) {
    app.directive("fade-in-bottom-left", fadeInBottomLeft);
  }
};
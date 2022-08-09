import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutBottomLeft = baseObjectDirective("fadeOutBottomLeft");
export const fadeOutBottomLeftDirective: Plugin = {
  install(app) {
    app.directive("fade-out-bottom-left", fadeOutBottomLeft);
  }
};
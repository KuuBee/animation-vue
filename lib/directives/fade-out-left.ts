import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutLeft = baseObjectDirective("fadeOutLeft");
export const fadeOutLeftDirective: Plugin = {
  install(app) {
    app.directive("fade-out-left", fadeOutLeft);
  }
};
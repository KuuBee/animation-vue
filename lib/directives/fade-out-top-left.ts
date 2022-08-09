import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutTopLeft = baseObjectDirective("fadeOutTopLeft");
export const fadeOutTopLeftDirective: Plugin = {
  install(app) {
    app.directive("fade-out-top-left", fadeOutTopLeft);
  }
};
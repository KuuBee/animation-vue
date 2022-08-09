import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInTopLeft = baseObjectDirective("fadeInTopLeft");
export const fadeInTopLeftDirective: Plugin = {
  install(app) {
    app.directive("fade-in-top-left", fadeInTopLeft);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeIn = baseObjectDirective("fadeIn");
export const fadeInDirective: Plugin = {
  install(app) {
    app.directive("fade-in", fadeIn);
  }
};
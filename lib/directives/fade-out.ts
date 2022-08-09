import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOut = baseObjectDirective("fadeOut");
export const fadeOutDirective: Plugin = {
  install(app) {
    app.directive("fade-out", fadeOut);
  }
};
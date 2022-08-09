import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutDown = baseObjectDirective("fadeOutDown");
export const fadeOutDownDirective: Plugin = {
  install(app) {
    app.directive("fade-out-down", fadeOutDown);
  }
};
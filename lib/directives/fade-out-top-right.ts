import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutTopRight = baseObjectDirective("fadeOutTopRight");
export const fadeOutTopRightDirective: Plugin = {
  install(app) {
    app.directive("fade-out-top-right", fadeOutTopRight);
  }
};
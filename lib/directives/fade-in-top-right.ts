import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInTopRight = baseObjectDirective("fadeInTopRight");
export const fadeInTopRightDirective: Plugin = {
  install(app) {
    app.directive("fade-in-top-right", fadeInTopRight);
  }
};
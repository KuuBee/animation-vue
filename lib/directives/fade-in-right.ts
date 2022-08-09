import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInRight = baseObjectDirective("fadeInRight");
export const fadeInRightDirective: Plugin = {
  install(app) {
    app.directive("fade-in-right", fadeInRight);
  }
};
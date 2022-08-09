import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInDown = baseObjectDirective("fadeInDown");
export const fadeInDownDirective: Plugin = {
  install(app) {
    app.directive("fade-in-down", fadeInDown);
  }
};
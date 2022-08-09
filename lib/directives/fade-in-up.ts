import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInUp = baseObjectDirective("fadeInUp");
export const fadeInUpDirective: Plugin = {
  install(app) {
    app.directive("fade-in-up", fadeInUp);
  }
};
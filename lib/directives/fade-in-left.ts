import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInLeft = baseObjectDirective("fadeInLeft");
export const fadeInLeftDirective: Plugin = {
  install(app) {
    app.directive("fade-in-left", fadeInLeft);
  }
};
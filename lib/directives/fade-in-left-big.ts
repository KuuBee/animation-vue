import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInLeftBig = baseObjectDirective("fadeInLeftBig");
export const fadeInLeftBigDirective: Plugin = {
  install(app) {
    app.directive("fade-in-left-big", fadeInLeftBig);
  }
};
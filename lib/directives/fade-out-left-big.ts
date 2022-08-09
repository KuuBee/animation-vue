import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutLeftBig = baseObjectDirective("fadeOutLeftBig");
export const fadeOutLeftBigDirective: Plugin = {
  install(app) {
    app.directive("fade-out-left-big", fadeOutLeftBig);
  }
};
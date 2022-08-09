import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeInUpBig = baseObjectDirective("fadeInUpBig");
export const fadeInUpBigDirective: Plugin = {
  install(app) {
    app.directive("fade-in-up-big", fadeInUpBig);
  }
};
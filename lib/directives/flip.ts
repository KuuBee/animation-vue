import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const flip = baseObjectDirective("flip");
export const flipDirective: Plugin = {
  install(app) {
    app.directive("flip", flip);
  }
};
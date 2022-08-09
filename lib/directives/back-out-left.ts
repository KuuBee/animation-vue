import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const backOutLeft = baseObjectDirective("backOutLeft");
export const backOutLeftDirective: Plugin = {
  install(app) {
    app.directive("back-out-left", backOutLeft);
  }
};
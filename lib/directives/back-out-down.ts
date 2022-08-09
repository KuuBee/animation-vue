import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const backOutDown = baseObjectDirective("backOutDown");
export const backOutDownDirective: Plugin = {
  install(app) {
    app.directive("back-out-down", backOutDown);
  }
};
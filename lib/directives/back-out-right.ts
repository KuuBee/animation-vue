import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const backOutRight = baseObjectDirective("backOutRight");
export const backOutRightDirective: Plugin = {
  install(app) {
    app.directive("back-out-right", backOutRight);
  }
};
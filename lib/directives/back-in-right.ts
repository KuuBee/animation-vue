import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const backInRight = baseObjectDirective("backInRight");
export const backInRightDirective: Plugin = {
  install(app) {
    app.directive("back-in-right", backInRight);
  }
};
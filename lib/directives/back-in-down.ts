import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const backInDown = baseObjectDirective("backInDown");
export const backInDownDirective: Plugin = {
  install(app) {
    app.directive("back-in-down", backInDown);
  }
};
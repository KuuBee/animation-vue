import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const backOutUp = baseObjectDirective("backOutUp");
export const backOutUpDirective: Plugin = {
  install(app) {
    app.directive("back-out-up", backOutUp);
  }
};
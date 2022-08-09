import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const backInUp = baseObjectDirective("backInUp");
export const backInUpDirective: Plugin = {
  install(app) {
    app.directive("back-in-up", backInUp);
  }
};
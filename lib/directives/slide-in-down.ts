import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const slideInDown = baseObjectDirective("slideInDown");
export const slideInDownDirective: Plugin = {
  install(app) {
    app.directive("slide-in-down", slideInDown);
  }
};
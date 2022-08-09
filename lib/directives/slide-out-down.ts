import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const slideOutDown = baseObjectDirective("slideOutDown");
export const slideOutDownDirective: Plugin = {
  install(app) {
    app.directive("slide-out-down", slideOutDown);
  }
};
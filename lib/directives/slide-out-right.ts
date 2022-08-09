import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const slideOutRight = baseObjectDirective("slideOutRight");
export const slideOutRightDirective: Plugin = {
  install(app) {
    app.directive("slide-out-right", slideOutRight);
  }
};
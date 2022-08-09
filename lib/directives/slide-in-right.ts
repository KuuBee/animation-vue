import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const slideInRight = baseObjectDirective("slideInRight");
export const slideInRightDirective: Plugin = {
  install(app) {
    app.directive("slide-in-right", slideInRight);
  }
};
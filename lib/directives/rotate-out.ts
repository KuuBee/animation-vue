import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateOut = baseObjectDirective("rotateOut");
export const rotateOutDirective: Plugin = {
  install(app) {
    app.directive("rotate-out", rotateOut);
  }
};
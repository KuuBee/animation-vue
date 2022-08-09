import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateOutDownRight = baseObjectDirective("rotateOutDownRight");
export const rotateOutDownRightDirective: Plugin = {
  install(app) {
    app.directive("rotate-out-down-right", rotateOutDownRight);
  }
};
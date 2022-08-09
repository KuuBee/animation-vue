import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateInDownRight = baseObjectDirective("rotateInDownRight");
export const rotateInDownRightDirective: Plugin = {
  install(app) {
    app.directive("rotate-in-down-right", rotateInDownRight);
  }
};
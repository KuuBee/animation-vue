import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateOutUpRight = baseObjectDirective("rotateOutUpRight");
export const rotateOutUpRightDirective: Plugin = {
  install(app) {
    app.directive("rotate-out-up-right", rotateOutUpRight);
  }
};
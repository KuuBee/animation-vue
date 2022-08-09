import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateInUpRight = baseObjectDirective("rotateInUpRight");
export const rotateInUpRightDirective: Plugin = {
  install(app) {
    app.directive("rotate-in-up-right", rotateInUpRight);
  }
};
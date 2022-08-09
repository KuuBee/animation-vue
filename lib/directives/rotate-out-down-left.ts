import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateOutDownLeft = baseObjectDirective("rotateOutDownLeft");
export const rotateOutDownLeftDirective: Plugin = {
  install(app) {
    app.directive("rotate-out-down-left", rotateOutDownLeft);
  }
};
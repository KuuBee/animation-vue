import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateInDownLeft = baseObjectDirective("rotateInDownLeft");
export const rotateInDownLeftDirective: Plugin = {
  install(app) {
    app.directive("rotate-in-down-left", rotateInDownLeft);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateInUpLeft = baseObjectDirective("rotateInUpLeft");
export const rotateInUpLeftDirective: Plugin = {
  install(app) {
    app.directive("rotate-in-up-left", rotateInUpLeft);
  }
};
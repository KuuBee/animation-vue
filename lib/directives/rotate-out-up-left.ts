import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateOutUpLeft = baseObjectDirective("rotateOutUpLeft");
export const rotateOutUpLeftDirective: Plugin = {
  install(app) {
    app.directive("rotate-out-up-left", rotateOutUpLeft);
  }
};
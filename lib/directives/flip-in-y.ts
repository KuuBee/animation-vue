import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const flipInY = baseObjectDirective("flipInY");
export const flipInYDirective: Plugin = {
  install(app) {
    app.directive("flip-in-y", flipInY);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const flipInX = baseObjectDirective("flipInX");
export const flipInXDirective: Plugin = {
  install(app) {
    app.directive("flip-in-x", flipInX);
  }
};
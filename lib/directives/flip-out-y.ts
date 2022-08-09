import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const flipOutY = baseObjectDirective("flipOutY");
export const flipOutYDirective: Plugin = {
  install(app) {
    app.directive("flip-out-y", flipOutY);
  }
};
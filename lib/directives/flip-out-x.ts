import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const flipOutX = baseObjectDirective("flipOutX");
export const flipOutXDirective: Plugin = {
  install(app) {
    app.directive("flip-out-x", flipOutX);
  }
};
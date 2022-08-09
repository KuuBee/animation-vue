import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const shakeY = baseObjectDirective("shakeY");
export const shakeYDirective: Plugin = {
  install(app) {
    app.directive("shake-y", shakeY);
  }
};
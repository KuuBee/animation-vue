import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const shakeX = baseObjectDirective("shakeX");
export const shakeXDirective: Plugin = {
  install(app) {
    app.directive("shake-x", shakeX);
  }
};
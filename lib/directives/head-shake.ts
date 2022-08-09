import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const headShake = baseObjectDirective("headShake");
export const headShakeDirective: Plugin = {
  install(app) {
    app.directive("head-shake", headShake);
  }
};
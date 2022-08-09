import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rollOut = baseObjectDirective("rollOut");
export const rollOutDirective: Plugin = {
  install(app) {
    app.directive("roll-out", rollOut);
  }
};
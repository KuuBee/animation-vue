import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rollIn = baseObjectDirective("rollIn");
export const rollInDirective: Plugin = {
  install(app) {
    app.directive("roll-in", rollIn);
  }
};
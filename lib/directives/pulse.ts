import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const pulse = baseObjectDirective("pulse");
export const pulseDirective: Plugin = {
  install(app) {
    app.directive("pulse", pulse);
  }
};
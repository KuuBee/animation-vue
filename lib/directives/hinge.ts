import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const hinge = baseObjectDirective("hinge");
export const hingeDirective: Plugin = {
  install(app) {
    app.directive("hinge", hinge);
  }
};
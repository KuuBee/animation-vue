import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const wobble = baseObjectDirective("wobble");
export const wobbleDirective: Plugin = {
  install(app) {
    app.directive("wobble", wobble);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const swing = baseObjectDirective("swing");
export const swingDirective: Plugin = {
  install(app) {
    app.directive("swing", swing);
  }
};
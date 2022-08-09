import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const jello = baseObjectDirective("jello");
export const jelloDirective: Plugin = {
  install(app) {
    app.directive("jello", jello);
  }
};
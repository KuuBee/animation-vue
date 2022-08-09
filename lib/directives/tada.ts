import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const tada = baseObjectDirective("tada");
export const tadaDirective: Plugin = {
  install(app) {
    app.directive("tada", tada);
  }
};
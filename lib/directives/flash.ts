import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const flash = baseObjectDirective("flash");
export const flashDirective: Plugin = {
  install(app) {
    app.directive("flash", flash);
  }
};
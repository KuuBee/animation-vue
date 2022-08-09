import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const slideInUp = baseObjectDirective("slideInUp");
export const slideInUpDirective: Plugin = {
  install(app) {
    app.directive("slide-in-up", slideInUp);
  }
};
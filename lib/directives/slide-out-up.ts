import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const slideOutUp = baseObjectDirective("slideOutUp");
export const slideOutUpDirective: Plugin = {
  install(app) {
    app.directive("slide-out-up", slideOutUp);
  }
};
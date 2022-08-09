import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const slideInLeft = baseObjectDirective("slideInLeft");
export const slideInLeftDirective: Plugin = {
  install(app) {
    app.directive("slide-in-left", slideInLeft);
  }
};
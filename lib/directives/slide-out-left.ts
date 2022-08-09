import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const slideOutLeft = baseObjectDirective("slideOutLeft");
export const slideOutLeftDirective: Plugin = {
  install(app) {
    app.directive("slide-out-left", slideOutLeft);
  }
};
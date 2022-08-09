import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomOutLeft = baseObjectDirective("zoomOutLeft");
export const zoomOutLeftDirective: Plugin = {
  install(app) {
    app.directive("zoom-out-left", zoomOutLeft);
  }
};
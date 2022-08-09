import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomIn = baseObjectDirective("zoomIn");
export const zoomInDirective: Plugin = {
  install(app) {
    app.directive("zoom-in", zoomIn);
  }
};
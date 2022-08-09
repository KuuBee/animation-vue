import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomOut = baseObjectDirective("zoomOut");
export const zoomOutDirective: Plugin = {
  install(app) {
    app.directive("zoom-out", zoomOut);
  }
};
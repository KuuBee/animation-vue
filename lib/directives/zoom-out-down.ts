import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomOutDown = baseObjectDirective("zoomOutDown");
export const zoomOutDownDirective: Plugin = {
  install(app) {
    app.directive("zoom-out-down", zoomOutDown);
  }
};
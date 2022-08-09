import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomInDown = baseObjectDirective("zoomInDown");
export const zoomInDownDirective: Plugin = {
  install(app) {
    app.directive("zoom-in-down", zoomInDown);
  }
};
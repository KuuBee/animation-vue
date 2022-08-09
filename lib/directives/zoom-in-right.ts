import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomInRight = baseObjectDirective("zoomInRight");
export const zoomInRightDirective: Plugin = {
  install(app) {
    app.directive("zoom-in-right", zoomInRight);
  }
};
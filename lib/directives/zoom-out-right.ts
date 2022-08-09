import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomOutRight = baseObjectDirective("zoomOutRight");
export const zoomOutRightDirective: Plugin = {
  install(app) {
    app.directive("zoom-out-right", zoomOutRight);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomOutUp = baseObjectDirective("zoomOutUp");
export const zoomOutUpDirective: Plugin = {
  install(app) {
    app.directive("zoom-out-up", zoomOutUp);
  }
};
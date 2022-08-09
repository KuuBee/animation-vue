import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomInUp = baseObjectDirective("zoomInUp");
export const zoomInUpDirective: Plugin = {
  install(app) {
    app.directive("zoom-in-up", zoomInUp);
  }
};
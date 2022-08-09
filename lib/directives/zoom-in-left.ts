import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const zoomInLeft = baseObjectDirective("zoomInLeft");
export const zoomInLeftDirective: Plugin = {
  install(app) {
    app.directive("zoom-in-left", zoomInLeft);
  }
};
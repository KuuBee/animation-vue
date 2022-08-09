import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rubberBand = baseObjectDirective("rubberBand");
export const rubberBandDirective: Plugin = {
  install(app) {
    app.directive("rubber-band", rubberBand);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const backInLeft = baseObjectDirective("backInLeft");
export const backInLeftDirective: Plugin = {
  install(app) {
    app.directive("back-in-left", backInLeft);
  }
};
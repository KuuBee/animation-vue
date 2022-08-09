import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const fadeOutUp = baseObjectDirective("fadeOutUp");
export const fadeOutUpDirective: Plugin = {
  install(app) {
    app.directive("fade-out-up", fadeOutUp);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const lightSpeedOutLeft = baseObjectDirective("lightSpeedOutLeft");
export const lightSpeedOutLeftDirective: Plugin = {
  install(app) {
    app.directive("light-speed-out-left", lightSpeedOutLeft);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const lightSpeedInLeft = baseObjectDirective("lightSpeedInLeft");
export const lightSpeedInLeftDirective: Plugin = {
  install(app) {
    app.directive("light-speed-in-left", lightSpeedInLeft);
  }
};
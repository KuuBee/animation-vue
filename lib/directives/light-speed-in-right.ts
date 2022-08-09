import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const lightSpeedInRight = baseObjectDirective("lightSpeedInRight");
export const lightSpeedInRightDirective: Plugin = {
  install(app) {
    app.directive("light-speed-in-right", lightSpeedInRight);
  }
};
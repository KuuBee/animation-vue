import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const lightSpeedOutRight = baseObjectDirective("lightSpeedOutRight");
export const lightSpeedOutRightDirective: Plugin = {
  install(app) {
    app.directive("light-speed-out-right", lightSpeedOutRight);
  }
};
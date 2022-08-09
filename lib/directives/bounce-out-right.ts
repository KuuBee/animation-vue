import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceOutRight = baseObjectDirective("bounceOutRight");
export const bounceOutRightDirective: Plugin = {
  install(app) {
    app.directive("bounce-out-right", bounceOutRight);
  }
};
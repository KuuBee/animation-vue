import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceOutDown = baseObjectDirective("bounceOutDown");
export const bounceOutDownDirective: Plugin = {
  install(app) {
    app.directive("bounce-out-down", bounceOutDown);
  }
};
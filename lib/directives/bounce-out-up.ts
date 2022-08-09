import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceOutUp = baseObjectDirective("bounceOutUp");
export const bounceOutUpDirective: Plugin = {
  install(app) {
    app.directive("bounce-out-up", bounceOutUp);
  }
};
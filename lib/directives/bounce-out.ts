import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceOut = baseObjectDirective("bounceOut");
export const bounceOutDirective: Plugin = {
  install(app) {
    app.directive("bounce-out", bounceOut);
  }
};
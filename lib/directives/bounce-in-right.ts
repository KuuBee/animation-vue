import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceInRight = baseObjectDirective("bounceInRight");
export const bounceInRightDirective: Plugin = {
  install(app) {
    app.directive("bounce-in-right", bounceInRight);
  }
};
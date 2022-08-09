import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceInDown = baseObjectDirective("bounceInDown");
export const bounceInDownDirective: Plugin = {
  install(app) {
    app.directive("bounce-in-down", bounceInDown);
  }
};
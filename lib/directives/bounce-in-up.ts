import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceInUp = baseObjectDirective("bounceInUp");
export const bounceInUpDirective: Plugin = {
  install(app) {
    app.directive("bounce-in-up", bounceInUp);
  }
};
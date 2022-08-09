import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceIn = baseObjectDirective("bounceIn");
export const bounceInDirective: Plugin = {
  install(app) {
    app.directive("bounce-in", bounceIn);
  }
};
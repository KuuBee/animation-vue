import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceInLeft = baseObjectDirective("bounceInLeft");
export const bounceInLeftDirective: Plugin = {
  install(app) {
    app.directive("bounce-in-left", bounceInLeft);
  }
};
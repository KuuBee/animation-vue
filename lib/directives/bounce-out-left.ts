import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounceOutLeft = baseObjectDirective("bounceOutLeft");
export const bounceOutLeftDirective: Plugin = {
  install(app) {
    app.directive("bounce-out-left", bounceOutLeft);
  }
};
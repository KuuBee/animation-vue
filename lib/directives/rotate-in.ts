import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const rotateIn = baseObjectDirective("rotateIn");
export const rotateInDirective: Plugin = {
  install(app) {
    app.directive("rotate-in", rotateIn);
  }
};
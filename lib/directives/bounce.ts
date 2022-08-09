import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const bounce = baseObjectDirective("bounce");
export const bounceDirective: Plugin = {
  install(app) {
    app.directive("bounce", bounce);
  }
};
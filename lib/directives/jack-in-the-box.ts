import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const jackInTheBox = baseObjectDirective("jackInTheBox");
export const jackInTheBoxDirective: Plugin = {
  install(app) {
    app.directive("jack-in-the-box", jackInTheBox);
  }
};
import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const heartBeat = baseObjectDirective("heartBeat");
export const heartBeatDirective: Plugin = {
  install(app) {
    app.directive("heart-beat", heartBeat);
  }
};
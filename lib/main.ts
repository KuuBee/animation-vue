import type { Plugin } from "vue";
import { GlobalAnimateConfig } from "./common/config";
// 导入指令
import { bounceDirective } from "./directives/bounce";
import { flashDirective } from "./directives/flash";
import { pulseDirective } from "./directives/pulse";
import { rubberBandDirective } from "./directives/rubber-band";
import { shakeXDirective } from "./directives/shake-x";
import { shakeYDirective } from "./directives/shake-y";
import { headShakeDirective } from "./directives/head-shake";
import { swingDirective } from "./directives/swing";
import { tadaDirective } from "./directives/tada";
import { wobbleDirective } from "./directives/wobble";
import { jelloDirective } from "./directives/jello";
import { heartBeatDirective } from "./directives/heart-beat";
import { backInDownDirective } from "./directives/back-in-down";
import { backInLeftDirective } from "./directives/back-in-left";
import { backInRightDirective } from "./directives/back-in-right";
import { backInUpDirective } from "./directives/back-in-up";
import { backOutDownDirective } from "./directives/back-out-down";
import { backOutLeftDirective } from "./directives/back-out-left";
import { backOutRightDirective } from "./directives/back-out-right";
import { backOutUpDirective } from "./directives/back-out-up";
import { bounceInDirective } from "./directives/bounce-in";
import { bounceInDownDirective } from "./directives/bounce-in-down";
import { bounceInLeftDirective } from "./directives/bounce-in-left";
import { bounceInRightDirective } from "./directives/bounce-in-right";
import { bounceInUpDirective } from "./directives/bounce-in-up";
import { bounceOutDirective } from "./directives/bounce-out";
import { bounceOutDownDirective } from "./directives/bounce-out-down";
import { bounceOutLeftDirective } from "./directives/bounce-out-left";
import { bounceOutRightDirective } from "./directives/bounce-out-right";
import { bounceOutUpDirective } from "./directives/bounce-out-up";
import { fadeInDirective } from "./directives/fade-in";
import { fadeInDownDirective } from "./directives/fade-in-down";
import { fadeInDownBigDirective } from "./directives/fade-in-down-big";
import { fadeInLeftDirective } from "./directives/fade-in-left";
import { fadeInLeftBigDirective } from "./directives/fade-in-left-big";
import { fadeInRightDirective } from "./directives/fade-in-right";
import { fadeInRightBigDirective } from "./directives/fade-in-right-big";
import { fadeInUpDirective } from "./directives/fade-in-up";
import { fadeInUpBigDirective } from "./directives/fade-in-up-big";
import { fadeInTopLeftDirective } from "./directives/fade-in-top-left";
import { fadeInTopRightDirective } from "./directives/fade-in-top-right";
import { fadeInBottomLeftDirective } from "./directives/fade-in-bottom-left";
import { fadeInBottomRightDirective } from "./directives/fade-in-bottom-right";
import { fadeOutDirective } from "./directives/fade-out";
import { fadeOutDownDirective } from "./directives/fade-out-down";
import { fadeOutDownBigDirective } from "./directives/fade-out-down-big";
import { fadeOutLeftDirective } from "./directives/fade-out-left";
import { fadeOutLeftBigDirective } from "./directives/fade-out-left-big";
import { fadeOutRightDirective } from "./directives/fade-out-right";
import { fadeOutRightBigDirective } from "./directives/fade-out-right-big";
import { fadeOutUpDirective } from "./directives/fade-out-up";
import { fadeOutUpBigDirective } from "./directives/fade-out-up-big";
import { fadeOutTopLeftDirective } from "./directives/fade-out-top-left";
import { fadeOutTopRightDirective } from "./directives/fade-out-top-right";
import { fadeOutBottomRightDirective } from "./directives/fade-out-bottom-right";
import { fadeOutBottomLeftDirective } from "./directives/fade-out-bottom-left";
import { flipDirective } from "./directives/flip";
import { flipInXDirective } from "./directives/flip-in-x";
import { flipInYDirective } from "./directives/flip-in-y";
import { flipOutXDirective } from "./directives/flip-out-x";
import { flipOutYDirective } from "./directives/flip-out-y";
import { lightSpeedInRightDirective } from "./directives/light-speed-in-right";
import { lightSpeedInLeftDirective } from "./directives/light-speed-in-left";
import { lightSpeedOutRightDirective } from "./directives/light-speed-out-right";
import { lightSpeedOutLeftDirective } from "./directives/light-speed-out-left";
import { rotateInDirective } from "./directives/rotate-in";
import { rotateInDownLeftDirective } from "./directives/rotate-in-down-left";
import { rotateInDownRightDirective } from "./directives/rotate-in-down-right";
import { rotateInUpLeftDirective } from "./directives/rotate-in-up-left";
import { rotateInUpRightDirective } from "./directives/rotate-in-up-right";
import { rotateOutDirective } from "./directives/rotate-out";
import { rotateOutDownLeftDirective } from "./directives/rotate-out-down-left";
import { rotateOutDownRightDirective } from "./directives/rotate-out-down-right";
import { rotateOutUpLeftDirective } from "./directives/rotate-out-up-left";
import { rotateOutUpRightDirective } from "./directives/rotate-out-up-right";
import { hingeDirective } from "./directives/hinge";
import { jackInTheBoxDirective } from "./directives/jack-in-the-box";
import { rollInDirective } from "./directives/roll-in";
import { rollOutDirective } from "./directives/roll-out";
import { zoomInDirective } from "./directives/zoom-in";
import { zoomInDownDirective } from "./directives/zoom-in-down";
import { zoomInLeftDirective } from "./directives/zoom-in-left";
import { zoomInRightDirective } from "./directives/zoom-in-right";
import { zoomInUpDirective } from "./directives/zoom-in-up";
import { zoomOutDirective } from "./directives/zoom-out";
import { zoomOutDownDirective } from "./directives/zoom-out-down";
import { zoomOutLeftDirective } from "./directives/zoom-out-left";
import { zoomOutRightDirective } from "./directives/zoom-out-right";
import { zoomOutUpDirective } from "./directives/zoom-out-up";
import { slideInDownDirective } from "./directives/slide-in-down";
import { slideInLeftDirective } from "./directives/slide-in-left";
import { slideInRightDirective } from "./directives/slide-in-right";
import { slideInUpDirective } from "./directives/slide-in-up";
import { slideOutDownDirective } from "./directives/slide-out-down";
import { slideOutLeftDirective } from "./directives/slide-out-left";
import { slideOutRightDirective } from "./directives/slide-out-right";
import { slideOutUpDirective } from "./directives/slide-out-up";

export const vueAnimateCss = (config?: GlobalAnimateConfig): Plugin => ({
  install(app) {
    config?.initConfig();
    // 注册指令
    app.use(bounceDirective);
    app.use(flashDirective);
    app.use(pulseDirective);
    app.use(rubberBandDirective);
    app.use(shakeXDirective);
    app.use(shakeYDirective);
    app.use(headShakeDirective);
    app.use(swingDirective);
    app.use(tadaDirective);
    app.use(wobbleDirective);
    app.use(jelloDirective);
    app.use(heartBeatDirective);
    app.use(backInDownDirective);
    app.use(backInLeftDirective);
    app.use(backInRightDirective);
    app.use(backInUpDirective);
    app.use(backOutDownDirective);
    app.use(backOutLeftDirective);
    app.use(backOutRightDirective);
    app.use(backOutUpDirective);
    app.use(bounceInDirective);
    app.use(bounceInDownDirective);
    app.use(bounceInLeftDirective);
    app.use(bounceInRightDirective);
    app.use(bounceInUpDirective);
    app.use(bounceOutDirective);
    app.use(bounceOutDownDirective);
    app.use(bounceOutLeftDirective);
    app.use(bounceOutRightDirective);
    app.use(bounceOutUpDirective);
    app.use(fadeInDirective);
    app.use(fadeInDownDirective);
    app.use(fadeInDownBigDirective);
    app.use(fadeInLeftDirective);
    app.use(fadeInLeftBigDirective);
    app.use(fadeInRightDirective);
    app.use(fadeInRightBigDirective);
    app.use(fadeInUpDirective);
    app.use(fadeInUpBigDirective);
    app.use(fadeInTopLeftDirective);
    app.use(fadeInTopRightDirective);
    app.use(fadeInBottomLeftDirective);
    app.use(fadeInBottomRightDirective);
    app.use(fadeOutDirective);
    app.use(fadeOutDownDirective);
    app.use(fadeOutDownBigDirective);
    app.use(fadeOutLeftDirective);
    app.use(fadeOutLeftBigDirective);
    app.use(fadeOutRightDirective);
    app.use(fadeOutRightBigDirective);
    app.use(fadeOutUpDirective);
    app.use(fadeOutUpBigDirective);
    app.use(fadeOutTopLeftDirective);
    app.use(fadeOutTopRightDirective);
    app.use(fadeOutBottomRightDirective);
    app.use(fadeOutBottomLeftDirective);
    app.use(flipDirective);
    app.use(flipInXDirective);
    app.use(flipInYDirective);
    app.use(flipOutXDirective);
    app.use(flipOutYDirective);
    app.use(lightSpeedInRightDirective);
    app.use(lightSpeedInLeftDirective);
    app.use(lightSpeedOutRightDirective);
    app.use(lightSpeedOutLeftDirective);
    app.use(rotateInDirective);
    app.use(rotateInDownLeftDirective);
    app.use(rotateInDownRightDirective);
    app.use(rotateInUpLeftDirective);
    app.use(rotateInUpRightDirective);
    app.use(rotateOutDirective);
    app.use(rotateOutDownLeftDirective);
    app.use(rotateOutDownRightDirective);
    app.use(rotateOutUpLeftDirective);
    app.use(rotateOutUpRightDirective);
    app.use(hingeDirective);
    app.use(jackInTheBoxDirective);
    app.use(rollInDirective);
    app.use(rollOutDirective);
    app.use(zoomInDirective);
    app.use(zoomInDownDirective);
    app.use(zoomInLeftDirective);
    app.use(zoomInRightDirective);
    app.use(zoomInUpDirective);
    app.use(zoomOutDirective);
    app.use(zoomOutDownDirective);
    app.use(zoomOutLeftDirective);
    app.use(zoomOutRightDirective);
    app.use(zoomOutUpDirective);
    app.use(slideInDownDirective);
    app.use(slideInLeftDirective);
    app.use(slideInRightDirective);
    app.use(slideInUpDirective);
    app.use(slideOutDownDirective);
    app.use(slideOutLeftDirective);
    app.use(slideOutRightDirective);
    app.use(slideOutUpDirective);

  }
});

export {
  bounceDirective,
  flashDirective,
  pulseDirective,
  rubberBandDirective,
  shakeXDirective,
  shakeYDirective,
  headShakeDirective,
  swingDirective,
  tadaDirective,
  wobbleDirective,
  jelloDirective,
  heartBeatDirective,
  backInDownDirective,
  backInLeftDirective,
  backInRightDirective,
  backInUpDirective,
  backOutDownDirective,
  backOutLeftDirective,
  backOutRightDirective,
  backOutUpDirective,
  bounceInDirective,
  bounceInDownDirective,
  bounceInLeftDirective,
  bounceInRightDirective,
  bounceInUpDirective,
  bounceOutDirective,
  bounceOutDownDirective,
  bounceOutLeftDirective,
  bounceOutRightDirective,
  bounceOutUpDirective,
  fadeInDirective,
  fadeInDownDirective,
  fadeInDownBigDirective,
  fadeInLeftDirective,
  fadeInLeftBigDirective,
  fadeInRightDirective,
  fadeInRightBigDirective,
  fadeInUpDirective,
  fadeInUpBigDirective,
  fadeInTopLeftDirective,
  fadeInTopRightDirective,
  fadeInBottomLeftDirective,
  fadeInBottomRightDirective,
  fadeOutDirective,
  fadeOutDownDirective,
  fadeOutDownBigDirective,
  fadeOutLeftDirective,
  fadeOutLeftBigDirective,
  fadeOutRightDirective,
  fadeOutRightBigDirective,
  fadeOutUpDirective,
  fadeOutUpBigDirective,
  fadeOutTopLeftDirective,
  fadeOutTopRightDirective,
  fadeOutBottomRightDirective,
  fadeOutBottomLeftDirective,
  flipDirective,
  flipInXDirective,
  flipInYDirective,
  flipOutXDirective,
  flipOutYDirective,
  lightSpeedInRightDirective,
  lightSpeedInLeftDirective,
  lightSpeedOutRightDirective,
  lightSpeedOutLeftDirective,
  rotateInDirective,
  rotateInDownLeftDirective,
  rotateInDownRightDirective,
  rotateInUpLeftDirective,
  rotateInUpRightDirective,
  rotateOutDirective,
  rotateOutDownLeftDirective,
  rotateOutDownRightDirective,
  rotateOutUpLeftDirective,
  rotateOutUpRightDirective,
  hingeDirective,
  jackInTheBoxDirective,
  rollInDirective,
  rollOutDirective,
  zoomInDirective,
  zoomInDownDirective,
  zoomInLeftDirective,
  zoomInRightDirective,
  zoomInUpDirective,
  zoomOutDirective,
  zoomOutDownDirective,
  zoomOutLeftDirective,
  zoomOutRightDirective,
  zoomOutUpDirective,
  slideInDownDirective,
  slideInLeftDirective,
  slideInRightDirective,
  slideInUpDirective,
  slideOutDownDirective,
  slideOutLeftDirective,
  slideOutRightDirective,
  slideOutUpDirective,
}

import type { ObjectDirective } from "vue";
import { AnimateConfig, GlobalAnimateConfig } from "./config";

const elBucketMap = new WeakMap();
type SetPropertyConfig = Pick<
  NonNullable<ConstructorParameters<typeof GlobalAnimateConfig>["0"]>,
  "delay" | "duration" | "repeat"
>;
type CssSetPropertyFnParametersList = Parameters<
  CSSStyleDeclaration["setProperty"]
>[];

// 设置css属性
function setProperty(
  el: HTMLElement,
  prefix: string,
  currentConfig: SetPropertyConfig,
  globaleConfig: SetPropertyConfig
): [string, CssSetPropertyFnParametersList] {
  const { delay, duration, repeat } = currentConfig;
  const {
    delay: globaleDelay,
    duration: globaleDuration,
    repeat: globaleRepeat
  } = globaleConfig;
  // 需要设置的变量列表
  const animateCssVariable: CssSetPropertyFnParametersList = [];
  // 当改变了css变量后 需要加个初始的动作class
  let actionCssStr: string = "";

  // 如果当前的变量和全局变量有区别就重新设置
  if (delay !== globaleDelay) {
    animateCssVariable.push(["--animate-delay", `${delay}ms`]);
    actionCssStr += `${prefix}delay-1s`;
  }
  if (duration !== globaleDuration) {
    animateCssVariable.push(["--animate-duration", `${duration}ms`]);
  }
  if (repeat !== globaleRepeat) {
    animateCssVariable.push(["--animate-repeat", `${repeat}`]);
    actionCssStr += `${actionCssStr ? " " : ""}${prefix}repeat-1`;
  }

  for (const item of animateCssVariable) {
    el.style.setProperty.call(el.style, ...item);
  }
  return [actionCssStr, animateCssVariable];
}

function registerCancelEvent(
  el: HTMLElement,
  defalutClassName: string,
  animateCssVariable: CssSetPropertyFnParametersList
) {
  const eventHandler = () => {
    if (el.className === defalutClassName) return;
    el.className = defalutClassName;
    for (const item of animateCssVariable) {
      el.style.removeProperty(item[0]);
    }
    el.removeEventListener("animationcancel", eventHandler);
    el.removeEventListener("animationend", eventHandler);
  };
  elBucketMap.set(el, {
    eventHandler
  });
  el.addEventListener("animationcancel", eventHandler);
  el.addEventListener("animationend", eventHandler);
}

export const baseObjectDirective = (
  animateClassName: string
): ObjectDirective<HTMLElement, AnimateConfig> => ({
  mounted(el, bind, vnode, prevVNode) {
    const { modifiers, value } = bind;
    // 全局单例里拿配置
    const {
      prefix,
      delay: globaleDelay,
      duration: globaleDuration,
      repeat: globaleRepeat,
      stop
    } = GlobalAnimateConfig.init();
    // stop 全局终止全部动画
    if (stop) return;
    const defalutClassName = el.className;
    const { delay, duration, repeat, autoPlay, play } = value ?? {};

    // 延迟
    const _delay = delay ?? globaleDelay;
    // 持续时间
    const _duration = duration ?? globaleDuration;
    // 重复次数
    const _repeat = repeat ?? globaleRepeat;
    // 是否自动播放
    const _autoPlay = autoPlay ?? true;
    // 自动播放为 false 时控制是什么时候播放
    const _play = play ?? true;
    // mounted 时如果 _autoPlay 为 false 就直接跳出
    // 等等 update 时去进行更新
    if (!_autoPlay || !_play) return;

    const [actionCssStr, animateCssVariable] = setProperty(
      el,
      prefix,
      {
        delay: _delay,
        duration: _duration,
        repeat: _repeat
      },
      {
        delay: globaleDelay,
        duration: globaleDuration,
        repeat: globaleRepeat
      }
    );
    registerCancelEvent(el, defalutClassName, animateCssVariable);

    // 执行动画
    el.className += ` ${prefix}animated ${prefix}${animateClassName} ${
      actionCssStr ? actionCssStr : ""
    }`;
  },
  updated(el, bind) {
    console.log("on updated");

    const { modifiers, value } = bind;
    const { delay, duration, repeat, autoPlay, play } = value ?? {};
    // 如果 mounted 执行了动画 就优先取消动画
    // 如果 mounted 没有执行动画 就跳过
    if (elBucketMap.has(el)) {
      const { eventHandler } = elBucketMap.get(el);

      // 先关闭动画和取消监听的事件 避免泄露
      eventHandler();
      el.removeEventListener("animationcancel", eventHandler);
      el.removeEventListener("animationend", eventHandler);
    }

    // 全局单例里拿配置
    const {
      prefix,
      delay: globaleDelay,
      duration: globaleDuration,
      repeat: globaleRepeat,
      stop
    } = GlobalAnimateConfig.init();
    if (stop) return;
    const defalutClassName = el.className;
    // 延迟
    const _delay = delay ?? globaleDelay;
    // 持续时间
    const _duration = duration ?? globaleDuration;
    // 重复次数
    const _repeat = repeat ?? globaleRepeat;
    // 是否自动播放
    const _autoPlay = autoPlay ?? true;
    // 自动播放为 false 时控制是什么时候播放
    const _play = play ?? true;
    if (!_autoPlay || !_play) return;

    const [actionCssStr, animateCssVariable] = setProperty(
      el,
      prefix,
      {
        delay: _delay,
        duration: _duration,
        repeat: _repeat
      },
      {
        delay: globaleDelay,
        duration: globaleDuration,
        repeat: globaleRepeat
      }
    );
    registerCancelEvent(el, defalutClassName, animateCssVariable);

    // 执行动画
    el.className += ` ${prefix}animated ${prefix}${animateClassName} ${
      actionCssStr ? actionCssStr : ""
    }`;
  },
  beforeUnmount(el) {
    const currentMap = elBucketMap.get(el);
    const eventHandler = currentMap.eventHandler;
    el.removeEventListener("animationcancel", eventHandler);
    el.removeEventListener("animationend", eventHandler);
  }
});

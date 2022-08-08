export class GlobalAnimateConfig {
  constructor(config?: {
    delay?: number;
    duration?: number;
    repeat?: number | "infinite";
    prefix?: string;
    stop?: boolean;
  }) {
    const { delay, duration, repeat, prefix, stop } = config ?? {};
    this.delay = delay ?? 1000;
    this.duration = duration ?? 1000;
    this.repeat = repeat ?? 1;
    this.prefix = prefix ?? "animate__";
    this.stop = stop ?? false;
  }

  // {
  //   delay?: number;
  //   duration?: number;
  //   repeat?: number;
  //   prefix?: string;
  //   stop?: boolean;
  // }
  static init(config?: ConstructorParameters<typeof GlobalAnimateConfig>["0"]) {
    if (this._cache) {
      return this._cache;
    }
    this._cache = new GlobalAnimateConfig(config);
    return this._cache;
  }
  private static _cache: GlobalAnimateConfig;

  // 延迟 ms
  delay: number;
  // 持续时间 ms
  duration: number;
  // 重复次数
  repeat: number | "infinite";
  // 自定义构造后修改的前缀
  prefix: string;
  // 全局关闭全部动画
  stop: boolean;

  initConfig() {
    let root: HTMLHtmlElement | null;
    try {
      root = window.document.querySelector("html");
    } catch (error) {
      throw Error("初始化配置错误");
    }
    if (!root) {
      throw Error("初始化配置错误");
    }
    root.style.setProperty("--animate-duration", `${this.duration}ms`);
    root.style.setProperty("--animate-delay", `${this.delay}ms`);
    root.style.setProperty("--animate-repeat", `${this.repeat}`);
  }
}

export abstract class AnimateConfig {
  abstract autoPlay?: boolean;
  abstract play?: boolean;
  abstract delay?: number;
  abstract duration?: number;
  abstract repeat?: number | "infinite";
}

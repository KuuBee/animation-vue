---
lang: zh
title: 配置项
---

# 配置项

可以通过配置修改部分动画效果

## 全局配置

通过在注册插件时添加全局配置

| 属性名   | 解释                                    | 类型                  | 默认值      |
| -------- | --------------------------------------- | --------------------- | ----------- |
| delay    | 延迟                                    | `?number`             | 0           |
| duration | 动画持续时间                            | `?number`             | 1000        |
| repeat   | 重复次数                                | `?number\|"infinite"` | 1           |
| prefix   | 类名前缀，自定义构造的`Animate.css`前缀 | `?string`             | animate\_\_ |
| stop     | 是否禁用动画                            | `?boolean`            | false       |

```ts
const app = createApp(App);
app.use(
  vueAnimateCss(
    GlobalAnimateConfig.init({
      delay: 5000,
      duration: 15000,
      repeat: 2
      // repeat: "infinite"
    })
  )
app.mount("#app");
```

## 局部配置

你也可以再每个指令后进行对应的配置

| 属性名   | 解释                                       | 类型                  | 默认值     |
| -------- | ------------------------------------------ | --------------------- | ---------- |
| delay    | 延迟                                       | `?number`             | 继承于全局 |
| duration | 动画持续时间                               | `?number`             | 继承于全局 |
| repeat   | 重复次数                                   | `?number\|"infinite"` | 继承于全局 |
| autoPlay | 是否自动播放，默认情况元素创建后就立即播放 | `?boolean`            | true       |

```html
<div v-bounce="state.bounceConfig">bounce</div>
```

```ts
import { reactive } from "vue";
import { AnimateConfig } from "animation-vue";

const state = reactive<{
  bounceConfig: AnimateConfig;
}>({
  bounceConfig: {
    duration: 2000,
    repeat: 3,
    delay: 700,
    // autoPlay 多用于函数式的控制动画播放
    autoPlay: false
  }
});
```

## 修饰符

通过修饰符可以避免手动去设置 js 进行对应的事件监听

| 属性名  | 解释               |
| ------- | ------------------ |
| `click` | 点击事件           |
| `hover` | 桌面端鼠标移入事件 |

```html
<div v-bounce.click="state.bounceConfig">bounce</div>
```

```ts
import { reactive } from "vue";
import { AnimateConfig } from "animation-vue";

const state = reactive<{
  bounceConfig: AnimateConfig;
}>({
  bounceConfig: {
    duration: 2000,
    autoPlay: false
  }
});
```

::: warning 注意
当使用了修饰符后，如果 autoPlay 为 false，则动画不会默认播放直至 autoPlay 为 true。
当 repeat 设置为 infinite 后动画将不会终结，并且会无视掉修饰符。
:::

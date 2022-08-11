---
lang: en
title: Configuration
---

# Configuration

Some animation effects can be modified by configuration

## Global Configuration

By adding global configuration when registering the plugin

| property | explanation                                         | type                  | defult value |
| -------- | --------------------------------------------------- | --------------------- | ------------ |
| delay    | delay                                               | `?number`             | 0            |
| duration | animation duration                                  | `?number`             | 1000         |
| repeat   | repeat times                                        | `?number\|"infinite"` | 1            |
| prefix   | class name prefix,custom build `Animate.css` prefix | `?string`             | animate\_\_  |
| stop     | disable animation                                   | `?boolean`            | false        |

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

## Partial Configuration

You can also configure the configuration after each directives.

| property | explanation                                                                                         | type                  | defult value          |
| -------- | --------------------------------------------------------------------------------------------------- | --------------------- | --------------------- |
| delay    | delay                                                                                               | `?number`             | inherited from global |
| duration | animation duration                                                                                  | `?number`             | inherited from global |
| repeat   | repeat times                                                                                        | `?number\|"infinite"` | inherited from global |
| autoPlay | Whether to play automatically <br> by default it will play immediately after the element is created | `?boolean`            | true                  |

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
    // autoPlay Mostly used for functional control animation play
    autoPlay: false
  }
});
```

## Modifiers

Through the modifiers, you can avoid manually setting js/ts for corresponding event monitoring

| property | explanation              |
| -------- | ------------------------ |
| `click`  | click event              |
| `hover`  | desktop mouseenter event |

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

::: warning warning
When the modifiers is used, if autoPlay is false, the animation will not play by default until autoPlay is true. <br>
The animation will not end when repeat is set to infinite, and will only play when autoPlay is true.
:::

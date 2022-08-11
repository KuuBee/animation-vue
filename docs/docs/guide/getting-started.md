---
lang: en
title: Getting Started
---

# Getting Started

## install

Install using your favorite package manager `animation-vue`：

```sh
npm i animation-vue animate.css
# or
pnpm add animation-vue animate.css
```

impot `animate.css` into your files:

```ts
import "animate.css";
```

And use the plugin in main.ts:

```ts{5,8}
import { createApp } from "vue";
import App from "./App.vue";
import "animate.css";

import { vueAnimateCss } from "animation-vue";

const app = createApp(App);
app.use(vueAnimateCss());
app.mount("#app");
```

## Basic Use

After the installation complete, you can add the directives to the element:

```html
<div v-bounce>bounce</div>

<div v-flash.click>flash! click me!</div>
```

Now refresh the page or click on the element and you should see the animation :tada:

<script setup lang="ts">
import { reactive } from "vue";
import { AnimateConfig } from "../../lib/main";

const state = reactive<{
  bounceConfig: AnimateConfig;
}>({
  bounceConfig: {
    duration: 2000,
    repeat: 3,
    delay: 700,
    autoPlay: false
  }
});
</script>

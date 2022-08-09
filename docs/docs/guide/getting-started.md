---
lang: EN
title: Getting Started
description: get-start
---

# Getting Started

## Install

install `vue.animate.css` with your favorite package manager:

```sh
npm i vue.animate.css animate.css
# or
pnpm add vue.animate.css animate.css
```

Import `animate.css` into your file:

```ts
import "animate.css";
```

and add to the app as a plugin:

```ts{5,8}
import { createApp } from "vue";
import App from "./App.vue";
import "animate.css";

import { vueAnimateCss } from "vue.animate.css/dist/main";

const app = createApp(App);
app.use(vueAnimateCss());
app.mount("#app");
```

## Basic usage

After installing `vue.animate.css`,you can add directive to you element:

```html
<div v-bounce>bounce</div>

<div v-flash.click>flash! click me!</div>
```
Now you've got a CSS animated element. Nice!:tada:

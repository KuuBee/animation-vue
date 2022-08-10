---
lang: zh
title: 快速上手
---

# 快速上手

## 安装

使用你喜爱的包管理工具安装 `animation-vue`：

```sh
npm i animation-vue animate.css
# 或者
pnpm add animation-vue animate.css
```

导入 `animate.css` 到你的文件中：

```ts
import "animate.css";
```

并且在 main.ts 中添加插件：

```ts{5,8}
import { createApp } from "vue";
import App from "./App.vue";
import "animate.css";

import { vueAnimateCss } from "animation-vue";

const app = createApp(App);
app.use(vueAnimateCss());
app.mount("#app");
```

## 基础使用

再你安装完成后，你可以在你的元素上添加对应的指令：

```html
<div v-bounce>bounce</div>

<div v-flash.click>flash! click me!</div>
```

现在你已经得到动态的 css 动画元素了。:tada:

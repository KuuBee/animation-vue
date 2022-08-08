<template>
  <div class="app">
    <!-- <div
      v-bounce="{
        delay: 270,
        duration: 2000,
        repeat: 3
      }"
    >
      bounce
    </div> -->
    <div class="animate-block">
      <div v-bounce="state.bounceConfig">bounce</div>
    </div>
    <div class="button" @click="clickMe">click me!</div>
    <!-- <div v-bounce.click>bounce</div>
    <div v-flash.hover>bounce</div> -->
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { AnimateConfig } from "../../dist/common/config";

let state = reactive<{
  bounceConfig: AnimateConfig;
}>({
  bounceConfig: {
    repeat: "infinite",
    autoPlay: false
  }
});
let index = 2;
const clickMe = () => {
  state.bounceConfig = {
    autoPlay: index % 2 === 0
  };
  index++;
};

setTimeout(() => {
  state.bounceConfig = {};
}, 2000);
</script>

<style scoped>
.app {
  padding: 10px;
}
.animate-block {
  width: 100%;
  background-color: thistle;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 10px;
}
.button {
  padding: 10px;
  border-radius: 10px;
  background-color: skyblue;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  user-select: none;
  cursor: pointer;
}
</style>

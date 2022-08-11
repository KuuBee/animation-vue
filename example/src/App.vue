<template>
  <div class="app">
    <div class="animate-block">
      <div v-fade-in-left-big="state.fadeInLeftBig">
        immediately! fade-in-left-big
      </div>
    </div>
    <div class="animate-block">
      <div v-bounce.click>click me! bounce</div>
    </div>
    <div class="animate-block">
      <div v-flash.click>click me! flash</div>
    </div>
    <div class="animate-block">
      <div v-jello.hover>hover me! jello</div>
    </div>
    <div class="animate-block">
      <div class="action button" @click="setConfiguration">click me!</div>
      <div v-tada="state.tada">Configuration! tada</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { AnimateConfig } from "animation-vue";

const state = reactive<{
  fadeInLeftBig: AnimateConfig;
  tada: AnimateConfig;
}>({
  fadeInLeftBig: {
    duration: 5000,
    repeat: 4
  },
  tada: {
    duration: 2000,
    repeat: 3,
    delay: 700,
    autoPlay: false
  }
});
const setConfiguration = () => {
  state.tada = {
    duration: 2000,
    repeat: 3,
    delay: 700,
    autoPlay: true
  };
};
</script>
<style scoped>
.app {
  padding: 10px;
}
.animate-block {
  position: relative;
  user-select: none;
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
  height: 20px;
  text-align: center;
  line-height: 20px;
  user-select: none;
  cursor: pointer;
}
.action {
  position: absolute;
  top: 5px;
  left: 5px;
}
</style>

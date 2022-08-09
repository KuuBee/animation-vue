<template>
  <div class="app">
    <div class="animate-block">
      <div v-bounce.click>bounce</div>
    </div>
    <div class="animate-block">
      <div v-flash.click>flash</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.app {
  padding: 10px;
}
.animate-block {
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
  height: 30px;
  text-align: center;
  line-height: 30px;
  user-select: none;
  cursor: pointer;
}
</style>

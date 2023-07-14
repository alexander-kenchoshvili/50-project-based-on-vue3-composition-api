<script setup>
import { ref, computed } from "vue";
let load = ref(0);

const blurring = () => {
  load.value++;
  if (load.value > 99) {
    clearInterval(int);
  }
};
let int = setInterval(blurring, 30);

const opacity = computed(() => {
  return load.value >= 99 ? 0 : 1 - load.value / 100;
});
const blur = computed(() => {
  return load.value <= 100 ? 50 - (load.value / 100) * 50 : 0;
});
</script>

<template>
  <div class="blurry-loading">
    <div class="blurry-loading__bg" :style="{ filter: `blur(${blur}px)` }"></div>
    <div class="blurry-loading__text" :style="{ opacity: opacity }">
      {{ `${load} %` }}
    </div>
  </div>
</template>

<style lang="scss">
.blurry-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  &__bg {
    background: url("https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg")
      no-repeat center center/cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    filter: blur(50px);
  }
  &__text {
    font-size: 50px;
    color: #fff;
  }
}
</style>

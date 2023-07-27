<script setup>
import { ref } from "vue";
const activeIndex = ref(1);
const width = ref(0);

const nextClick = () => {
  activeIndex.value++;
  width.value = (activeIndex.value - 1) * 33;
  if (activeIndex.value >= 4) {
    activeIndex.value = 4;
  }
  if (width.value >= 99) {
    width.value = 99;
  }
};
const prevClick = () => {
  activeIndex.value--;
  width.value = (activeIndex.value - 1) * 33;

  if (activeIndex.value <= 1) {
    activeIndex.value = 1;
  }
  if (width.value <= 0) {
    width.value = 0;
  }
};
</script>

<template>
  <div class="progres-bar">
    <div class="progres-bar__wrapper">
      <div class="progres-bar__container">
        <div class="progres-bar__navigation" :style="{ width: `${width}%` }"></div>
        <div
          v-for="(item, index) in 4"
          :key="index"
          class="progres-bar__circle"
          :class="{ active: activeIndex >= index + 1 }"
        >
          {{ index + 1 }}
        </div>
      </div>
      <button
        class="progres-bar__btn"
        :disabled="activeIndex === 1 ? true : false"
        @click="prevClick"
      >
        prev
      </button>
      <button
        :disabled="activeIndex === 4 ? true : false"
        class="progres-bar__btn"
        @click="nextClick"
      >
        next
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.progres-bar {
  background-color: #f6f7fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  &__wrapper {
    text-align: center;
  }
  &__container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
    max-width: 100%;
    width: 350px;
    z-index: 1;
    &::before {
      content: "";
      background-color: #e0e0e0;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: -1;
      height: 4px;
      width: 100%;
    }
  }
  &__navigation {
    background-color: #3498db;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -1;
    transition: 0.4s ease;
    height: 4px;
    width: 0%;
  }
  &__circle {
    background-color: white;
    color: #999;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #e0e0e0;
    transition: 0.4s ease;
    &.active {
      border-color: #3498db;
    }
  }
  &__btn {
    background-color: #3498db;
    color: white;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
    &:active {
      transform: scale(0.98);
    }
    &:focus {
      outline: 0;
    }
    &:disabled {
      background-color: #999;
      cursor: not-allowed;
    }
  }
}
</style>

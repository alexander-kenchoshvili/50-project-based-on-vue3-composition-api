<script setup>
import { ref } from "vue";
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = ref(500);
const square = ref(null);

const setColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setSquareColor = (index) => {
  square.value[index].style.background = setColor();
};
const removeSquareColor = (index) => {
  square.value[index].style.background = "#1d1d1d";
};
</script>

<template>
  <div class="hoverboard">
    <div class="hoverboard__content">
      <div
        v-for="(item, index) in SQUARES"
        :key="index"
        @mouseover="setSquareColor(index)"
        @mouseleave="removeSquareColor(index)"
        class="hoverboard__square"
        ref="square"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.hoverboard {
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 400px;
  }
  &__square {
    background-color: #1d1d1d;
    box-shadow: 0 0 2px #000;
    height: 16px;
    width: 16px;
    margin: 2px;
    transition: 2s ease;
    &:hover {
      transition-duration: 0s;
    }
  }
}
</style>

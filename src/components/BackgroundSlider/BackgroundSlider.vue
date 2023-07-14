<script setup>
import LeftArrow from "./SVG/LeftArrow.vue";
import RightArrow from "./SVG/RightArrow.vue";
import { imgData } from "./imgData.js";
import { ref } from "vue";

const slider = ref(null);

let activeSlide = ref(0);
const incrementActiveSlide = () => {
  activeSlide.value++;
  if (activeSlide.value > imgData.length - 1) {
    activeSlide.value = 0;
  }
};
const decrementActiveSlide = () => {
  activeSlide.value--;
  if (activeSlide.value < 0) {
    activeSlide.value = imgData.length - 1;
  }
};
</script>

<template>
  <div
    ref="slider"
    :style="`background-image: url(${imgData[activeSlide].img})`"
    class="slider"
  >
    <div class="slider__content">
      <div
        v-for="(data, index) in imgData"
        class="slider__slide"
        :class="{ active: activeSlide === index }"
        :style="`background-image: url(${data.img})`"
      ></div>

      <div class="slider__arrow left" @click="decrementActiveSlide">
        <LeftArrow />
      </div>
      <div class="slider__arrow right" @click="incrementActiveSlide">
        <RightArrow />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.slider {
  background-position: center center;
  background-size: cover;
  height: 100vh;
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    // z-index: -1;
  }
  &__content {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    height: 70vh;
    width: 70vw;
    position: relative;
    overflow: hidden;
  }
  &__slide {
    opacity: 0;
    height: 100vh;
    width: 100vw;
    background-position: center center;
    background-size: cover;
    position: absolute;
    top: -15vh;
    left: -15vw;
    transition: 0.4s ease;
    z-index: 1;
    &.active {
      opacity: 1;
    }
  }
  &__arrow {
    position: fixed;
    z-index: 100;
    padding: 20px;
    border: 2px solid orange;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    svg {
      width: 50px;
      height: 50px;
    }

    path {
      fill: white;
    }
    &.left {
      left: calc(15vw - 92px);
    }
    &.right {
      right: calc(15vw - 92px);
    }
  }
}
</style>

<script setup>
import ArrowUp from "./SVG/ArrowUp.vue";
import ArrowDown from "./SVG/ArrowDown.vue";
import { contentData } from "./contentData.js";
import { ref, onMounted } from "vue";
const activeIndex = ref(0);
const leftSlide = ref(null);
const rightSlide = ref(null);
const content = ref(null);

onMounted(() => {
  if (leftSlide.value) {
    leftSlide.value.style.top = `-${(contentData[0].images.length - 1) * 100}vh`;
  }
});
const changeSlide = (direction) => {
  const sliderHeight = content.value.clientHeight;
  if (direction === "up") {
    activeIndex.value++;
    if (activeIndex.value > contentData[0].images.length - 1) {
      activeIndex.value = 0;
    }
  } else if (direction === "down") {
    activeIndex.value--;
    if (activeIndex.value < 0) {
      activeIndex.value = contentData[0].images.length - 1;
    }
  }
  rightSlide.value.style.transform = `translateY(-${activeIndex.value * sliderHeight}px)`;
  leftSlide.value.style.transform = `translateY(${activeIndex.value * sliderHeight}px)`;
};
</script>

<template>
  <div class="vertical-slider">
    <div ref="content" class="vertical-slider__content">
      <div ref="leftSlide" class="vertical-slider__left">
        <div
          v-for="(data, index) in contentData[0].content"
          :style="{ backgroundColor: data.bgColor }"
        >
          <h1>{{ data.title }}</h1>
          <p>{{ data.teaser }}</p>
        </div>
      </div>
      <div ref="rightSlide" class="vertical-slider__right">
        <div
          v-for="(image, index) in contentData[0].images"
          :style="{ 'background-image': `url(${image})` }"
        ></div>
      </div>
      <div class="vertical-slider__buttons">
        <div class="vertical-slider__button">
          <ArrowDown class="vertical-slider__down-arrow" @click="changeSlide('down')" />
        </div>
        <div class="vertical-slider__button">
          <ArrowUp class="vertical-slider__up-arrow" @click="changeSlide('up')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.vertical-slider {
  height: 100vh;
  &__content {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  &__left {
    height: 100%;
    width: 35%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s ease-in-out;
    div {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    h1 {
      font-size: 40px;
      margin-bottom: 10px;
      margin-top: -30px;
    }
  }
  &__right {
    height: 100%;
    position: absolute;
    top: 0;
    left: 35%;
    width: 65%;
    transition: transform 0.5s ease-in-out;

    div {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      height: 100%;
      width: 100%;
    }
  }
  &__button {
    position: absolute;
    left: 35%;
    top: 50%;
    z-index: 100;
  }
  &__down-arrow {
    transform: translateX(-100%);
    background-color: #fff;
    width: 50px;
    height: 70px;
    padding: 12px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
    path {
      transition: all 0.5s ease-in-out;
    }
    &:hover {
      path {
        fill: rgb(92, 222, 78);
      }
    }
  }
  &__up-arrow {
    transform: translateY(-100%);
    background-color: #fff;
    width: 50px;
    height: 70px;
    padding: 12px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    path {
      transition: all 0.5s ease-in-out;
    }
    &:hover {
      path {
        fill: rgb(92, 222, 78);
      }
    }
  }
}
</style>

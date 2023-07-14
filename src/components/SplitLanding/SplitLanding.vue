<script setup>
import { ref } from "vue";

const hoverLeft = ref(false);
const hoverRight = ref(false);
const handleLeft = () => {
  hoverLeft.value = true;
};
const handleLeftOutHover = () => {
  hoverLeft.value = false;
};
const handleRight = () => {
  hoverRight.value = true;
};
const handleRightOutHover = () => {
  hoverRight.value = false;
};
</script>

<template>
  <div class="split-landing__wrapper">
    <div
      class="split-landing__content"
      :class="[{ 'hover-left': hoverLeft, 'hover-right': hoverRight }]"
    >
      <div
        class="split-landing__box left"
        @mouseover="handleLeft"
        @mouseout="handleLeftOutHover"
      >
        <h1>Playstation 5</h1>
        <a href="#" class="split-landing__left-btn">Buy Now</a>
      </div>
      <div
        class="split-landing__box right"
        @mouseover="handleRight"
        @mouseout="handleRightOutHover"
      >
        <h1>XBox Series X</h1>
        <a href="#" class="split-landing__right-btn">Buy Now</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.split-landing {
  &__wrapper {
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    background: #333;
    &.hover-left {
      .left {
        width: 75%;
      }
      .right {
        width: 25%;
      }
    }
    &.hover-right {
      .left {
        width: 25%;
      }
      .right {
        width: 75%;
      }
    }
  }
  &__box {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
    h1 {
      font-size: 30px;
      color: white;
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
    &.left {
      left: 0;
      background: url("https://wallpapers.com/images/featured/ps5-2va2br9eeb2j1tnl.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      transition: all 0.7s ease-in-out;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(87, 84, 236, 0.7);
        transition: all 0.7s ease-in-out;
      }
    }
    &.right {
      right: 0;
      background: url("https://assets.xboxservices.com/assets/87/7a/877a7487-aa48-4a08-b2a7-64ef2608f25b.jpg?n=Xbox-Series-X_Superhero-1084_Dream-Particles_1920x1080_02.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      transition: all 0.7s ease-in-out;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(50, 50, 50, 0.3);
        transition: all 0.7s ease-in-out;
      }
    }
  }
  &__left-btn,
  &__right-btn {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-40%);
    text-decoration: none;
    color: white;
    border: #fff solid 0.2rem;
    font-size: 18px;
    width: 15rem;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
    align-items: center;
  }
  &__left-btn:hover {
    background-color: rgba(87, 84, 236, 1);
  }
  &__right-btn:hover {
    background-color: rgba(50, 50, 50, 1);
  }
}
</style>

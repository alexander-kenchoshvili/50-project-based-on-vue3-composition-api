<script setup>
import { ref } from "vue";
const box = ref(null);
const AddMagic = ref(false);

const doMagic = () => {
  AddMagic.value = !AddMagic.value;
};

const calculateBackgroundPosition = (index) => {
  const row = Math.floor(index / 4);
  const col = index % 4;
  const x = -col * 125;
  const y = -row * 125;
  return `${x}px ${y}px`;
};
</script>

<template>
  <div class="bg-boxes">
    <button @click="doMagic" class="bg-boxes__magic">Magic</button>
    <div class="bg-boxes__box-wrapper" :class="{ big: AddMagic }">
      <div
        v-for="(item, index) in 16"
        :key="index"
        ref="box"
        class="bg-boxes__box"
        :style="{ backgroundPosition: calculateBackgroundPosition(index) }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.bg-boxes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  background-color: #fafafa;
  &__magic {
    background-color: #f9ca24;
    color: #fff;
    border: 0;
    border-radius: 3px;
    font-size: 16px;
    padding: 12px 20px;
    cursor: pointer;
    position: fixed;
    top: 20px;
    letter-spacing: 1px;
    box-shadow: 0 3px rgba(249, 202, 36, 0.5);
    outline: none;
    z-index: 100;
    &:active {
      box-shadow: none;
      transform: translateY(2px);
    }
  }
  &__box-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 500px;
    width: 500px;
    position: relative;
    transition: 0.4s ease;
    &.big {
      width: 600px;
      height: 600px;
      .bg-boxes__box {
        transform: rotateZ(360deg);
      }
    }
  }
  &__box {
    background-color: yellow;
    height: 125px;
    width: 125px;
    background-image: url("https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif");
    background-repeat: no-repeat;
    background-size: 500px 500px;
    position: relative;
    transition: 0.4s ease;
    margin: 0;
    &::after {
      content: "";
      background-color: #f6e58d;
      position: absolute;
      top: 8px;
      right: -15px;
      height: 100%;
      width: 15px;
      transform: skewY(45deg);
    }
    &::before {
      content: "";
      background-color: #f9ca24;
      position: absolute;
      bottom: -15px;
      left: 8px;
      height: 15px;
      width: 100%;
      transform: skewX(45deg);
    }
  }
}
</style>

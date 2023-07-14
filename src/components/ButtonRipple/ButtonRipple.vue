<script setup>
import { ref } from "vue";
const addCircle = ref(false);
const circle = ref(null);

const rippleEffect = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;
  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;
  addCircle.value = true;

  if (circle.value) {
    circle.value.style.top = yInside + "px";
  }
  if (circle.value) {
    circle.value.style.left = xInside + "px";
  }
  setTimeout(() => {
    addCircle.value = false;
  }, 500);
};
</script>

<template>
  <div class="button-ripple">
    <button @click="rippleEffect" class="button-ripple__button">
      Click Me
      <span ref="circle" :class="{ 'button-ripple__circle': addCircle }"></span>
    </button>
  </div>
</template>

<style lang="scss">
.button-ripple {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  &__button {
    background-color: purple;
    color: #fff;
    border: 1px solid purple;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px 30px;
    overflow: hidden;
    margin: 10px 0;
    position: relative;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  &__circle {
    position: absolute;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: scale 0.5s ease-out;
  }
  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
}
</style>

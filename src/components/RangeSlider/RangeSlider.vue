<script setup>
import { ref } from "vue";
const slideRange = ref(50);
const left = ref();

const getRange = (value) => {
  const range = document.getElementById("range");
  const label = range.nextElementSibling;

  const range_width = getComputedStyle(range).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");

  const num_width = +range_width.substring(0, range_width.length - 2); //300
  const num_label_width = +label_width.substring(0, label_width.length - 2); //80

  const max = +range.max; //100
  const min = +range.min; //0

  left.value =
    value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
};

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
</script>

<template>
  <div class="range-slider">
    <h2>Custom Range Slider</h2>
    <div class="range-slider__content">
      <input
        type="range"
        min="0"
        max="100"
        id="range"
        @input="getRange(slideRange)"
        v-model="slideRange"
      />
      <label :style="{ left: `${left}px` }" for="range">{{ slideRange }}</label>
    </div>
  </div>
</template>

<style lang="scss">
.range-slider {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h2 {
    position: absolute;
    top: 10px;
  }
  &__content {
    position: relative;
    input[type="range"] {
      width: 300px;
      margin: 18px 0;
      appearance: none;
      &::-webkit-slider-runnable-track {
        background-color: purple;
        border-radius: 4px;
        width: 100%;
        height: 10px;
        cursor: pointer;
      }
      &::-webkit-slider-thumb {
        appearance: none;
        height: 24px;
        width: 24px;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid purple;
        border-radius: 50%;
        margin-top: -7px;
      }
    }
    label {
      background-color: #fff;
      position: absolute;
      top: -25px;
      left: 110px;
      width: 80px;
      padding: 5px 0;
      text-align: center;
      border-radius: 4px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>

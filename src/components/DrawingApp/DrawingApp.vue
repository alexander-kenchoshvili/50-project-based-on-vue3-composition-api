<script setup>
import { ref, onMounted } from "vue";

const canvas = ref(null);
const ctx = ref(null);
const size = ref(10);
const color = ref("#000000");
const eraserColor = ref("#F5f5f5");

const isPressed = ref(false);
const isErasing = ref(false);

const x = ref(undefined);
const y = ref(undefined);

const drawCircle = (x, y) => {
  if (ctx.value) {
    ctx.value.beginPath();
    ctx.value.arc(x, y, size.value, 0, Math.PI * 2);
    ctx.value.fillStyle = isErasing.value ? eraserColor.value : color.value;
    ctx.value.fill();
  }
};

const drawLine = (x1, y1, x2, y2) => {
  if (ctx.value) {
    ctx.value.beginPath();
    ctx.value.moveTo(x1, y1);
    ctx.value.lineTo(x2, y2);
    ctx.value.strokeStyle = isErasing.value ? eraserColor.value : color.value;
    ctx.value.lineWidth = size.value * 2;
    ctx.value.stroke();
  }
};

const mouseDown = (e) => {
  isPressed.value = true;
  x.value = e.offsetX;
  y.value = e.offsetY;
};

const mouseUp = () => {
  isPressed.value = false;
  x.value = undefined;
  y.value = undefined;
};

const mouseMove = (e) => {
  if (isPressed.value) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x.value, y.value, x2, y2);
    x.value = x2;
    y.value = y2;
  }
};

const increaseSize = () => {
  size.value += 5;
  if (size.value >= 50) {
    size.value = 50;
  }
};

const decreaseSize = () => {
  size.value -= 5;
  if (size.value <= 5) {
    size.value = 5;
  }
};

const toggleEraser = () => {
  isErasing.value = !isErasing.value;
};

const clearCanvas = () => {
  if (ctx.value) {
    ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
  }
};

onMounted(() => {
  ctx.value = canvas.value.getContext("2d");
});
</script>

<template>
  <div class="drawing-app">
    <canvas
      width="800"
      height="800"
      ref="canvas"
      @mousedown="mouseDown"
      @mouseup="mouseUp"
      @mousemove="mouseMove"
      class="drawing-app__canvas"
    ></canvas>
    <div class="drawing-app__toolbox">
      <button class="drawing-app__decrease" @click="decreaseSize">-</button>
      <span class="drawing-app__size">{{ size }}</span>
      <button class="drawing-app__increase" @click="increaseSize">+</button>
      <input type="color" id="color" v-model="color" />
      <button @click="toggleEraser" class="drawing-app__eraser">
        {{ isErasing ? "Eraser" : "Draw" }}
      </button>
      <button @click="clearCanvas" class="drawing-app__clear">X</button>
    </div>
  </div>
</template>

<style lang="scss">
.drawing-app {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  &__canvas {
    border: 2px solid steelblue;
  }

  &__toolbox {
    background-color: steelblue;
    border: 1px solid slateblue;
    display: flex;
    width: 800px;
    padding: 1rem;

    * {
      background-color: #fff;
      border: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      height: 50px;
      width: 50px;
      margin: 0.25rem;
      padding: 0.25rem;
      cursor: pointer;

      &:last-child {
        margin-left: auto;
      }
    }
  }
  &__eraser {
    font-size: 15px;
  }
}
</style>

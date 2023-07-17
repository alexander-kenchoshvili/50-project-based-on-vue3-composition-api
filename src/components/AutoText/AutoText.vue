<script setup>
import { ref, onMounted } from "vue";
const textResult = ref();
const text = ref("We Love Programming!");
const idx = ref(1);
const speedController = ref(1);
const speed = ref(500);
const writeText = () => {
  textResult.value = text.value.slice(0, idx.value);
  idx.value++;
  if (idx.value > text.value.length) {
    idx.value = 1;
  }
  setTimeout(writeText, speed.value / speedController.value);
};
onMounted(() => {
  writeText();
});
</script>

<template>
  <div class="auto-text">
    <h1>{{ textResult }}</h1>
    <div class="auto-text__content">
      <label for="speed">Speed:</label>
      <input
        type="number"
        name="speed"
        v-model="speedController"
        min="1"
        max="5"
        step="1"
      />
    </div>
  </div>
</template>

<style lang="scss">
.auto-text {
  background-color: darksalmon;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  &__content {
    position: absolute;
    bottom: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    font-size: 18px;
    input {
      width: 50px;
      padding: 5px;
      font-size: 18px;
      background-color: darksalmon;
      border: none;
      text-align: center;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>

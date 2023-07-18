<script setup>
import { ref, watch } from "vue";
const good = ref(false);
const cheap = ref(false);
const fast = ref(false);

watch([good, cheap, fast], () => {
  if (good.value && fast.value) {
    cheap.value = false;
  }
  if (cheap.value) {
    fast.value = false;
  }
  if (fast.value) {
    cheap.value = false;
  }
});
</script>

<template>
  <div class="checkboxes">
    <h2>How do you want your project to be?</h2>
    <div class="checkboxes__toggle-content">
      <input v-model="good" type="checkbox" id="good" class="checkboxes__toggle" />
      <label for="good" class="checkboxes__label">
        <div class="checkboxes__ball"></div>
      </label>
      <span>Good</span>
    </div>
    <div class="checkboxes__toggle-content">
      <input v-model="cheap" type="checkbox" id="cheap" class="checkboxes__toggle" />
      <label for="cheap" class="checkboxes__label">
        <div class="checkboxes__ball"></div>
      </label>
      <span>Cheap</span>
    </div>
    <div class="checkboxes__toggle-content">
      <input v-model="fast" type="checkbox" id="fast" class="checkboxes__toggle" />
      <label for="fast" class="checkboxes__label">
        <div class="checkboxes__ball"></div>
      </label>
      <span>Fast</span>
    </div>
  </div>
</template>

<style lang="scss">
.checkboxes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  &__toggle-content {
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 200px;
  }

  &__toggle {
    visibility: hidden;

    &:checked + .checkboxes__label {
      background-color: #8e44ad;
    }

    &:checked + .checkboxes__label .checkboxes__ball {
      animation: slideOn 0.3s linear forwards;
    }

    &:not(:checked) + .checkboxes__label .checkboxes__ball {
      animation: slideOff 0.3s linear forwards;
    }
  }

  &__label {
    width: 80px;
    height: 40px;
    background-color: #d0d0d0;
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    margin: 0 15px 0;
    position: relative;
  }

  &__ball {
    background-color: #fff;
    height: 34px;
    width: 34px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    align-items: center;
    justify-content: center;
  }

  @keyframes slideOn {
    0% {
      transform: translateX(0) scale(1);
    }
    50% {
      transform: translateX(20px) scale(1.2);
    }
    100% {
      transform: translateX(37px) scale(1);
    }
  }

  @keyframes slideOff {
    0% {
      transform: translateX(37px) scale(1);
    }
    50% {
      transform: translateX(20px) scale(1.2);
    }
    100% {
      transform: translateX(0) scale(1);
    }
  }
}
</style>

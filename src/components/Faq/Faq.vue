<script setup>
import Close from "./SVG/Close.vue";
import Arrow from "./SVG/DownArrow.vue";
import { faqData } from "./FaqData.js";
import { ref } from "vue";

const isActive = ref(false);

const handleActive = (id) => {
  isActive.value = id;
};
const handleClose = (id) => {
  if (isActive.value === id) {
    isActive.value = false;
  }
};
</script>

<template>
  <div class="faq">
    <h1>Frequently Asked questions</h1>

    <div class="faq__wrapper">
      <div
        v-for="(data, index) in faqData"
        class="faq__box"
        :class="{ active: isActive === data.id }"
      >
        <h3 class="faq__box--title">{{ data.title }}</h3>
        <p v-if="isActive === data.id" class="faq__box--text">{{ data.content }}</p>
        <Arrow
          v-if="isActive !== data.id"
          @click="handleActive(data.id)"
          class="faq__box--open"
        />
        <Close v-else @click="handleClose(data.id)" class="faq__box--close" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.faq {
  background-color: #f0f0f0;
  height: 100vh;
  padding: 50px 0 30px;

  h1 {
    text-align: center;
  }
  &__wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
  &__box {
    background-color: transparent;
    border: 1px solid #9fa4a8;
    border-radius: 10px;
    margin: 20px 0;
    padding: 30px;
    position: relative;
    overflow: hidden;
    transition: 0.3 ease;
    &.active {
      background-color: #fff;
    }
    &--title {
      margin: 0 35px 0 0;
    }
    &--text {
      margin: 30px 0 0;
      padding-right: 40px;
    }
    &--open,
    &--close {
      position: absolute;
      top: 30px;
      right: 30px;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
}
</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const boxes = document.querySelectorAll(".scroll-animation__box");
  window.addEventListener("scroll", () => {
    const triggerOffest = (window.innerHeight / 3) * 2;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerOffest) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  });
});
</script>

<template>
  <div class="scroll-animation">
    <h1>Scroll to see the animation</h1>
    <div class="scroll-animation__box" v-for="item in 30" :key="item">
      <h2>Content</h2>
    </div>
  </div>
</template>

<style lang="scss">
.scroll-animation {
  background-color: #efedd6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  margin: 0;
  h1 {
    margin: 10px;
  }
  &__box {
    background-color: steelblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 200px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
    transform: translateX(400%);
    transition: transform 1.8s ease;
    &:nth-of-type(even) {
      transform: translateX(-400%);
    }
    h2 {
      font-size: 45px;
    }
    &.show {
      transform: translateX(0);
    }
  }
}
</style>

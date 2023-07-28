<script setup>
import { onMounted, ref } from "vue";
import { incData } from "./incData";
const count = ref([0, 0, 0]);

onMounted(() => {
  if (incData) {
    incData.forEach((data, i) => {
      const updateCounter = () => {
        const target = +data.target;
        const increment = target / 500;

        if (count.value[i] < target) {
          count.value[i] = Math.ceil(count.value[i] + increment);
          setTimeout(updateCounter, 1);
        } else {
          count.value[i] = target;
        }
      };
      updateCounter();
    });
  }
});
</script>

<template>
  <div class="increment-counter">
    <div v-for="(item, index) in incData" :key="index" class="increment-counter__content">
      <component :is="item.icon" :class="item.class" />
      <div class="increment-counter__number">
        {{ count[index] }}
      </div>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.increment-counter {
  display: flex;
  background-color: #8e44ad;
  color: white;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 580px) {
    flex-direction: column;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 50px;
    text-align: center;
  }
  &__number {
    font-size: 60px;
    margin-top: 10px;
  }
  .twitter,
  .youtube,
  .fb {
    width: 50px;
    height: 50px;
    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    path {
      fill: white;
    }
  }
}
</style>

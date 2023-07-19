<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const data = [
  {
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
    alt: "first-image",
  },
  {
    img:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    alt: "second-image",
  },
  {
    img:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    alt: "third-image",
  },
  {
    img:
      "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
    alt: "fourth-image",
  },
];

let interval;
const activeIndex = ref(0);
const slideNext = () => {
  activeIndex.value++;
  if (activeIndex.value > data.length - 1) {
    activeIndex.value = 0;
  }
};
const slidePrev = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  }
};

const startAutoSlide = () => {
  interval = setInterval(() => {
    slideNext();
  }, 2000);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="image-carousel">
    <div class="image-carousel__content">
      <div
        class="image-carousel__images"
        :style="{ transform: `translateX(${activeIndex * -500}px)` }"
      >
        <img v-for="(image, index) in data" :src="image.img" :alt="image.alt" />
      </div>
      <div class="image-carousel__buttons">
        <button class="image-carousel__buttons--button" @click="slidePrev">Prev</button>
        <button class="image-carousel__buttons--button" @click="slideNext">Next</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.image-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  &__content {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    height: 530px;
    width: 500px;
    overflow: hidden;
  }
  &__images {
    display: flex;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
    img {
      width: 500px;
      height: 500px;
      object-fit: cover;
    }
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    &--button {
      background-color: rebeccapurple;
      color: #fff;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      width: 49.5%;
      &:hover {
        opacity: 0.9;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>

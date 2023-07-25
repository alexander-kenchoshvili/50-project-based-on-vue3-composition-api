<script setup>
import QuoteLeft from "./SVG/QuoteLeft.vue";
import QuoteRight from "./SVG/QuoteRight.vue";
import { testimonials } from "./testimonials";
import { onMounted, ref } from "vue";
const idx = ref(0);

onMounted(() => {
  setInterval(() => {
    idx.value++;
    if (idx.value > testimonials.length - 1) {
      idx.value = 0;
    }
  }, 10000);
});
</script>

<template>
  <div class="testimonial">
    <div class="testimonial__content">
      <div class="testimonial__progress-bar"></div>

      <QuoteLeft class="testimonial__left-quote" />
      <QuoteRight class="testimonial__right-quote" />
      <p class="testimonial__text">
        {{ testimonials[idx]?.text }}
      </p>
      <div class="testimonial__user">
        <img :src="testimonials[idx]?.photo" />
        <div class="testimonial__user-details">
          <h4>{{ testimonials[idx]?.name }}</h4>
          <p>{{ testimonials[idx]?.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.testimonial {
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10px;
  &__content {
    background-color: #476ce4;
    color: #fff;
    border-radius: 15px;
    margin: 20px auto;
    padding: 50px 80px;
    max-width: 768px;
    position: relative;
    @media (max-width: 768px) {
      padding: 20px 30px;
    }
  }
  &__left-quote,
  &__right-quote {
    position: absolute;
    width: 30px;
    height: 30px;
    path {
      fill: rgba(255, 255, 255, 0.3);
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  &__left-quote {
    left: 40px;
  }
  &__right-quote {
    right: 40px;
  }
  &__text {
    line-height: 28px;
    text-align: justify;
  }
  &__user {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    img {
      border-radius: 50%;
      height: 75px;
      width: 75px;
      object-fit: cover;
    }
    &-details {
      margin-left: 10px;
      p {
        font-weight: normal;
        margin: 10px 0;
      }
    }
  }
  &__progress-bar {
    background-color: #fff;
    height: 4px;
    width: 100%;
    animation: grow 10s linear infinite;
    transform-origin: left;
  }
  @keyframes grow {
    0% {
      transform: scaleX(0);
    }
  }
}
</style>

<script setup>
import Twitter from "./SVG/Twitter.vue";
import Youtube from "./SVG/Youtube.vue";
import Facebook from "./SVG/Facebook.vue";
import { onMounted } from "vue";

onMounted(() => {
  const counters = document.querySelectorAll(".increment-counter__number");
  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;
      const increment = target / 500;
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
});
</script>

<template>
  <div class="increment-counter">
    <div class="increment-counter__content">
      <Twitter class="twitter" />
      <div class="increment-counter__number" data-target="12000"></div>
      <span>Twitter Followers</span>
    </div>
    <div class="increment-counter__content">
      <Youtube class="youtube" />
      <div class="increment-counter__number" data-target="5000"></div>
      <span>Youtube Subscribers</span>
    </div>
    <div class="increment-counter__content">
      <Facebook class="fb" />
      <div class="increment-counter__number" data-target="7500"></div>
      <span>Facebook fans</span>
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

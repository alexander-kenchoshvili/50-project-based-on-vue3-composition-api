<script setup>
const unsplashURL = "https://source.unsplash.com/random/";

const getRandomNumber = () => Math.floor(Math.random() * 10 + 300);
const getRandomSize = () => `${getRandomNumber()}x${getRandomNumber()}`;
</script>

<template>
  <div class="random-image">
    <h1 class="random-image__title">Random Image Feed</h1>
    <div class="random-image__content">
      <img v-for="item in 30" :src="`${unsplashURL}${getRandomSize()}`" alt="random" />
    </div>
  </div>
</template>

<style lang="scss">
.random-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  &__title {
    margin: 10px 0 0;
    text-align: center;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    img {
      object-fit: cover;
      margin: 10px;
      height: 300px;
      width: 300px;
      max-width: 100%;
    }
  }
}
</style>

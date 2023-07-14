<script setup>
import axios from "axios";
import { ref } from "vue";
const joke = ref("");
const generateJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await axios.get("https://icanhazdadjoke.com", config);
  joke.value = response.data.joke;
};
</script>

<template>
  <div class="jokes">
    <div class="jokes__wrapper">
      <h3>Don't Laugh Challenge</h3>
      <div class="jokes__joke">{{ joke }}</div>
      <button @click="generateJoke" class="jokes__button">Get Another Joke</button>
    </div>
  </div>
</template>

<style lang="scss">
.jokes {
  display: flex;
  background-color: #686de0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  padding: 20px;
  &__wrapper {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 50px 20px;
    text-align: center;
    max-width: 100%;
    width: 800px;
    h3 {
      margin: 0;
      opacity: 0.5;
      letter-spacing: 2px;
    }
  }
  &__joke {
    font-size: 30px;
    letter-spacing: 1px;
    line-height: 40px;
    margin: 50px auto;
    max-width: 600px;
  }
  &__button {
    background-color: #9f68e0;
    border: 0;
    border-radius: 10px;
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 14px 40px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    &:active {
      transform: scale(0.98);
    }
  }
}
</style>

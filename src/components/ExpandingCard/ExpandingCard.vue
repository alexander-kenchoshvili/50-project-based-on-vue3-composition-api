<script setup>
import { ref } from "vue";
import { cardData } from "./cardData.js";

const addActiveClass = ref(1);
const setActiveClass = (index) => {
  addActiveClass.value = index;
};
</script>

<template>
  <div class="expanding-card">
    <div class="container">
      <div
        v-for="data in cardData"
        class="panel"
        :class="{ active: addActiveClass === data.id }"
        @click="setActiveClass(data.id)"
        :style="{ backgroundImage: 'url(' + data.img + ')' }"
      >
        <h3>{{ data.title }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.expanding-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  .container {
    display: flex;
    width: 90vw;
    .panel {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 80vh;
      border-radius: 50px;
      color: white;
      cursor: pointer;
      flex: 0.5;
      margin: 10px;
      position: relative;
      transition: flex 0.7s ease-in;
      h3 {
        font-size: 24px;
        position: absolute;
        bottom: 20px;
        left: 20px;
        margin: 0;
        opacity: 0;
      }
      &.active {
        flex: 5;
        h3 {
          opacity: 1;
          transition: 0.3s ease-in 0.4s;
        }
      }
    }
    @media (max-width: 480px) {
      width: 100vw;
      .panel:nth-of-type(4),
      .panel:nth-of-type(5) {
        display: none;
      }
    }
  }
}
</style>

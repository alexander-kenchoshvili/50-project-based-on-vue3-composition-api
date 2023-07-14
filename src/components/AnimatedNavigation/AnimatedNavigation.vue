<script setup>
import { ref } from "vue";
const isActive = ref(false);
const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <div class="animated-navigation">
    <nav class="animated-navigation__nav" :class="{ active: isActive }">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button @click="toggleActive" class="animated-navigation__icon">
        <div class="line line1"></div>
        <div class="line line2"></div>
      </button>
    </nav>
  </div>
</template>

<style lang="scss">
.animated-navigation {
  background-color: #eafbff;
  background-image: linear-gradient(
    to bottom,
    #eafbff 0%,
    #eafbff 50%,
    #5290f9 50%,
    #5290f9 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &__nav {
    background-color: #fff;
    padding: 20px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: width 0.6s linear;
    &.active {
      width: 350px;
      ul {
        width: 100%;
      }
      li {
        opacity: 1;
        transform: rotateY(360deg);
      }

      .line1 {
        transform: rotate(-765deg) translateY(5.5px);
      }

      .line2 {
        transform: rotate(765deg) translateY(-5.5px);
      }
    }
    ul {
      display: flex;
      list-style-type: none;
      width: 0;
      transition: width 0.6s linear;
    }
    li {
      transform: rotateY(0deg);
      opacity: 0;
      transition: transform 0.6s linear, opacity 0.6s linear;
    }
    a {
      position: relative;
      color: #000;
      text-decoration: none;
      margin: 0 10px;
    }
  }
  &__icon {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    position: relative;
    height: 30px;
    width: 30px;
    .line {
      background-color: #5290f9;
      height: 2px;
      position: absolute;
      width: 20px;
      top: 10px;
      left: 5px;
      transition: transform 0.6s linear;
    }
    .line2 {
      top: auto;
      bottom: 10px;
    }
  }
}
</style>

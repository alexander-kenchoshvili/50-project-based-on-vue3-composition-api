<script setup>
import Close from "./SVG/Close.vue";
import Open from "./SVG/Open.vue";
import { ref, computed } from "vue";
import { navData } from "./navigationData.js";
import routes from "../../router/routes";

const navList = computed(() => routes.slice(0, 3));

const showNav = ref(false);

const openNav = () => {
  showNav.value = true;
};
const closenav = () => {
  showNav.value = false;
};
</script>

<template>
  <div class="rotate-navigation">
    <div class="rotate-navigation__wrapper" :class="{ 'show-nav': showNav }">
      <div class="rotate-navigation__circle-wrapper">
        <div class="rotate-navigation__circle">
          <Close @click="closenav" class="rotate-navigation__close" />
          <Open @click="openNav" class="rotate-navigation__open" />
        </div>
      </div>
      <div class="rotate-navigation__content">
        <h1>{{ navData.title }}</h1>
        <small>{{ navData.pop }}</small>
        <p>{{ navData.teaser }}</p>
        <h3>{{ navData?.dogTitle }}</h3>
        <img :src="navData.img" :alt="navData.dogTitle" />
        <p>
          {{ navData.content }}
        </p>
      </div>
    </div>
    <nav class="rotate-navigation__navbar">
      <ul>
        <li v-for="(nav, index) in navList">
          <router-link :to="nav.path">{{ nav.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.rotate-navigation {
  overflow: hidden;
  background-color: #333;
  color: #222;
  margin: 0;
  .rotate-navigation__wrapper.show-nav + .rotate-navigation__navbar li {
    transform: translateX(0);
    transition-delay: 0.3s;
  }
  &__wrapper {
    background-color: #fafafa;
    transform-origin: top left;
    transition: transform 0.5s linear;
    width: 100vw;
    min-height: 100vh;
    padding: 20px;
    &.show-nav {
      transform: rotate(-20deg);
      .rotate-navigation__circle {
        transform: rotate(-50deg);
      }
    }
    h1 {
      padding-bottom: 12px;
    }
    small {
      display: block;
      padding-bottom: 12px;
    }
    p {
      padding-bottom: 12px;
    }
    h3 {
      padding-bottom: 12px;
    }
    img {
      padding-bottom: 12px;
    }
  }
  &__circle-wrapper {
    position: fixed;
    top: -120px;
    left: -120px;
  }
  &__circle {
    background-color: #ff7979;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: relative;
    transition: transform 0.5s linear;
  }
  &__open {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 70%;
    left: 70%;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    path {
      fill: white;
    }
  }
  &__close {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 80%;
    left: 40%;
    transform: rotate(70deg);
    transform-origin: top left;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    path {
      fill: white;
    }
  }
  &__content {
    max-width: 1500px;
    margin: 50px auto;
    img {
      max-width: 100%;
    }
    h1 {
      margin: 0;
    }
    small {
      color: #555;
      font-size: italic;
    }
    p {
      color: #333;
      line-height: 1.5;
    }
  }
  &__navbar {
    position: fixed;
    bottom: 40px;
    left: 0;
    z-index: 100;
    ul {
      list-style-type: none;
      padding-left: 30px;
    }
    li {
      text-transform: uppercase;
      margin: 40px 0;
      transform: translateX(-100%);
      transition: transform 0.4s ease-in;
      a {
        color: white;
        text-decoration: none;
      }
    }
    li + li {
      margin-left: 15px;
      transform: translateX(-150%);
    }
    li + li + li {
      margin-left: 30px;
      transform: translateX(-200%);
    }
  }
}
</style>

<script setup>
import Burger from "./SVG/Hamburger.vue";
import CloseBtn from "./SVG/CloseBtn.vue";
import { ref } from "vue";
const showNavbar = ref(false);

const getNavbar = () => {
  showNavbar.value = true;
};
const closeNavbar = () => {
  showNavbar.value = false;
};
</script>

<template>
  <div class="netflix-nav">
    <Burger @click="getNavbar" class="netflix-nav__burger" />

    <img
      src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
      alt="Logo"
      class="netflix-nav__logo"
    />
    <p class="netflix-nav__text">Mobile Navigation</p>
    <div class="netflix-nav__nav nav-black" :class="{ visible: showNavbar }">
      <div class="netflix-nav__nav nav-red" :class="{ visible: showNavbar }">
        <div class="netflix-nav__nav nav-white" :class="{ visible: showNavbar }">
          <CloseBtn @click="closeNavbar" class="netflix-nav__close" />

          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt="Logo"
            class="netflix-nav__logo"
          />
          <ul class="netflix-nav__list">
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Life at Netflix</a>
            </li>
            <li>
              <ul>
                <li>
                  <a href="#">Netflix culture memo</a>
                </li>
                <li>
                  <a href="#">Work life balance</a>
                </li>
                <li>
                  <a href="#">INclusion & diversity</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.netflix-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  &__logo {
    width: 150px;
  }
  &__text {
    text-transform: uppercase;
  }
  &__burger {
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: fixed;
    top: 10px;
    left: 10px;
  }
  &__nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform, 0.7s ease-in-out;
    &.visible {
      transform: translateX(0);
    }
    &.nav-black {
      background-color: rgb(34, 31, 31);
      width: 60%;
      max-width: 480px;
      min-width: 320px;
      transition-delay: 0.4s;
      &.visible {
        transition-delay: 0s;
      }
    }
    &.nav-red {
      background-color: rgb(229, 9, 20);
      width: 95%;
      transition-delay: 0.2s;
      &.visible {
        transition-delay: 0.2s;
      }
    }
    &.nav-white {
      background-color: #fff;
      width: 95%;
      padding: 40px;
      position: relative;
      transition-delay: 0.2s;
      &.visible {
        transition-delay: 0.4s;
      }
    }
  }
  &__close {
    opacity: 0.3;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 40px;
    right: 30px;
    cursor: pointer;
  }
  &__list {
    list-style-type: none;
    ul {
      list-style-type: none;
      padding-left: 20px;
    }
    li {
      margin: 20px 0;
      a {
        color: rgb(34, 31, 31);
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
}
</style>

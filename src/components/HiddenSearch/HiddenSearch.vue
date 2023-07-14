<script setup>
import Search from "./SVG/Search.vue";
import { ref } from "vue";
const active = ref(false);
const searchInput = ref(null);

const toggleActive = () => {
  active.value = !active.value;
  if (active.value) {
    searchInput.value.focus();
  }
};
</script>

<template>
  <div class="search-wrapper">
    <div class="search-body" :class="{ active: active }">
      <input ref="searchInput" type="text" placeholder="Search ..." />
      <Search @click="toggleActive" class="search-icon" />
    </div>
  </div>
</template>

<style lang="scss">
.search {
  &-wrapper {
    background-image: linear-gradient(90deg, #7d5fff, #7158e2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }
  &-body {
    position: relative;
    height: 50px;
    &.active {
      input {
        width: 200px;
      }
      .search-icon {
        transform: translate(60px, -10px);
      }
    }

    input {
      background-color: #fff;
      border: 0;
      font-size: 18px;
      padding: 15px;
      height: 50px;
      width: 50px;
      transition: width 0.3s ease;
      outline: none;
      padding-right: 50px;
      border-radius: 12px;
    }
  }
  &-icon {
    position: absolute;
    background-color: white;
    width: 22px;
    height: 22px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: transform 0.3s ease;

    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

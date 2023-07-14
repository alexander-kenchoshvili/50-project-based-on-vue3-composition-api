<script setup>
import routes from "../../router/routes";
import { computed } from "vue";

const filteredRoute = computed(() => routes.filter((route) => route.path !== "/"));
</script>

<template>
  <div class="route-cards container">
    <router-link class="route-card" v-for="(route, i) in filteredRoute" :to="route.path">
      {{ route.name }}
    </router-link>
  </div>
</template>

<style lang="scss">
.route {
  &-cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding-top: 80px;
  }
  &-card {
    padding: 20px;
    background-color: black;
    text-decoration: none;
    color: orange;
    text-transform: uppercase;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

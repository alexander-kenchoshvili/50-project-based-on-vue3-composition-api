<script setup>
import routes from "../../router/routes";
import { computed } from "vue";

const filteredRoute = computed(() => routes.filter((route) => route.path !== "/"));
</script>

<template>
  <div class="route-cards">
    <router-link
      class="route-cards__card"
      v-for="(route, i) in filteredRoute"
      :to="route.path"
    >
      <span>{{ route.name }}</span>
    </router-link>
  </div>
</template>

<style lang="scss">
.route-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 32px;
  background-color: steelblue;
  min-height: 100vh;
  &__card {
    background-color: rgba(0, 0, 0, 0.4);
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 20px 0;
    span {
      font-size: 16px;
      transition: 0.5s;
    }

    &:hover {
      span {
        color: yellowgreen;
      }
    }
  }
}
</style>

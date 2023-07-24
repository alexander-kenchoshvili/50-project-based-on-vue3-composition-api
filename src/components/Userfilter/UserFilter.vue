<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";

const userData = ref([]);
const inputData = ref("");
const showLoading = ref(true);

onMounted(async () => {
  const { data } = await axios("https://randomuser.me/api?results=20");
  userData.value = data.results;
  showLoading.value = false;
});
const filterData = computed(() => {
  const searchQuery = inputData.value.toLowerCase().trim();
  if (!searchQuery) {
    return userData.value;
  }
  return userData.value.filter(
    (user) =>
      user.name.first.toLowerCase().includes(searchQuery) ||
      user.name.last.toLowerCase().includes(searchQuery)
  );
});
</script>

<template>
  <div class="user-filter">
    <div class="user-filter__content">
      <header class="user-filter__header">
        <h4 class="user-filter__title">Live User Filter</h4>
        <small class="user-filter__subtitle">Search by name and/or location</small>
        <input type="text" v-model="inputData" @input="filterData" placeholder="Search" />
      </header>
      <ul class="user-filter__list">
        <li v-for="(data, index) in filterData" :key="index">
          <img :src="data?.picture?.large" :alt="data?.name?.first" />
          <div class="user-filter__info">
            <h4>
              {{ data?.name?.title }} {{ data?.name?.first }} {{ data?.name?.last }}
            </h4>
            <p>{{ data?.location?.city }}, {{ data?.location?.country }}</p>
          </div>
        </li>

        <li v-if="showLoading">
          <h3>Loading ...</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.user-filter {
  background-color: #f8f9fd;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__content {
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    width: 300px;
  }
  &__header {
    background-color: #3e57db;
    color: white;
    padding: 30px 20px;

    input {
      background-color: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 50px;
      color: white;
      font-size: 14px;
      padding: 10px 15px;
      width: 100%;
      outline: none;
    }
  }

  &__subtitle {
    display: inline-block;
    margin: 5px 0 20px;
    opacity: 0.8;
  }

  &__list {
    background-color: #fff;
    list-style-type: none;
    max-height: 400px;
    overflow-y: auto;
    li {
      display: flex;
      padding: 20px;
      &:not(:last-of-type) {
        border-bottom: 1px solid #eee;
      }

      img {
        border-radius: 50%;
        object-fit: cover;
        height: 50px;
        width: 50px;
      }
    }
  }
  &__info {
    margin-left: 10px;
    h4 {
      margin: 0 0 10px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>

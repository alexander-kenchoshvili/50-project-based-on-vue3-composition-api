<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const username = ref("");
const userData = ref();
const showError = ref(false);
const repos = ref();
const errorRepo = ref(false);

const APIURL = "https://api.github.com/users/";
const getUser = async () => {
  await getUserInfo();
  await getRepos();
};
const getUserInfo = async () => {
  try {
    const { data } = await axios(APIURL + username.value);
    userData.value = data;
    showError.value = false;
  } catch (err) {
    if (err.response.status == 404) {
      showError.value = true;
      username.value = "";
    }
  }
};
const getRepos = async () => {
  try {
    const { data } = await axios(APIURL + username.value + "/repos");
    repos.value = data;
    errorRepo.value = false;
    username.value = "";
  } catch (err) {
    if (err.response.status == 404) {
      errorRepo.value = true;
    }
  }
};
</script>

<template>
  <div class="github-profile">
    <form @submit.prevent="getUser" class="github-profile__search">
      <input type="text" v-model="username" placeholder="Search a Github User" />
    </form>
    <main class="github-profile__main">
      <div v-if="userData && !showError" class="github-profile__card">
        <div>
          <img
            :src="userData.avatar_url"
            :alt="userData.name"
            class="github-profile__avatar"
          />
        </div>
        <div class="github-profile__info">
          <h2>{{ userData.name }}</h2>
          <p>{{ userData.bio }}</p>
          <ul>
            <li>{{ userData.followers }} <strong>Followers</strong></li>
            <li>{{ userData.following }} <strong>Following</strong></li>
            <li>{{ userData.public_repos }}<strong>Repos</strong></li>
          </ul>
          <div class="github-profile__repo-wrapper">
            <template v-for="repo in repos?.slice(0, 10)">
              <a
                v-if="repo"
                class="github-profile__repos"
                :href="repo.html_url"
                target="_blank"
                >{{ repo.name }}</a
              >
            </template>
            <div v-if="errorRepo" class="github-profile__repo-error">
              There is something problem about showing repositories
            </div>
          </div>
        </div>
      </div>
      <div v-if="showError" class="github-profile__card">
        No profile with this username
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.github-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2a2a72;
  height: 100vh;
  color: white;
  &__search {
    width: 100%;
    max-width: 700px;
    @media (max-width: 500px) {
      max-width: 400px;
    }
    input {
      width: 100%;
      display: block;
      background-color: #4c2885;
      border: none;
      border-radius: 10px;
      color: #fff;
      padding: 1rem;
      margin-bottom: 2rem;
      font-size: 1rem;
      box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
      outline: none;
      &::placeholder {
        color: #bbb;
      }
    }
  }
  &__card {
    max-width: 800px;
    background-color: #4c2885;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 3rem;
    margin: 0 1.5rem;
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }
  h2,
  p {
    margin-bottom: 12px;
  }
  &__avatar {
    border-radius: 50px;
    border: 10px solid #2a2a72;
    height: 150px;
    width: 150px;
  }
  &__info {
    color: #eee;
    margin-left: 2rem;
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      max-width: 400px;
      margin-bottom: 12px;
    }
    li {
      display: flex;
      align-items: center;
      strong {
        font-size: 0.9rem;
        margin-left: 0.5rem;
      }
    }
  }
  &__repos {
    text-decoration: none;
    color: #fff;
    background-color: #2a2a72;
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }
  &__repo-error {
    color: red;
  }
}
</style>

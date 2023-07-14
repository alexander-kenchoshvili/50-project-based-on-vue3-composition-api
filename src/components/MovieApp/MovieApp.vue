<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
const movieData = ref([]);
const searchQuery = ref("");

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const filteredMovies = computed(() => {
  if (searchQuery.value === "") {
    return movieData.value;
  } else {
    const query = searchQuery.value.toLowerCase();
    return movieData.value.filter((movie) =>
      movie.original_title.toLowerCase().includes(query)
    );
  }
});

const searchMovies = async (query) => {
  searchQuery.value = query;
  if (query === "") {
    const response = await axios.get(API_URL);
    movieData.value = response.data.results;
  } else {
    const res = await axios.get(`${SEARCH_URL}${query}"`);
    movieData.value = res.data.results;
  }
};
onMounted(async () => {
  const response = await axios.get(API_URL);
  movieData.value = response.data.results;
});
</script>

<template>
  <div class="movie-app">
    <header>
      <input
        class="movie-app__search"
        placeholder="Search"
        type="text"
        :value="searchQuery"
        @input="searchMovies($event.target.value)"
      />
    </header>
    <main>
      <div v-for="(movie, index) in filteredMovies" class="movie-app__movie">
        <img :src="`${IMG_PATH}${movie?.poster_path} `" :alt="movie?.original_title" />
        <div class="movie-app__movie--info">
          <h3>{{ movie?.original_title }}</h3>
          <span
            :class="{
              green: movie?.vote_average > 8,
              orange: movie?.vote_average >= 5 && movie?.vote_average <= 8,
              red: movie?.vote_average < 5,
            }"
            >{{ movie?.vote_average }}</span
          >
        </div>
        <div class="movie-app__movie--overview">
          <h3>Overview</h3>
          {{ movie?.overview }}
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.movie-app {
  background-color: #22254b;
  header {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    background-color: #373b69;
  }
  &__search {
    background-color: transparent;
    border: 2px solid #22254b;
    border-radius: 50px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: white;
    &::placeholder {
      color: #7378c5;
    }
    &:focus {
      outline: none;
      background-color: #22254b;
    }
  }
  main {
    display: flex;
    flex-wrap: wrap;
  }
  &__movie {
    width: 300px;
    margin: 1rem;
    background-color: #373b69;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    &:hover {
      .movie-app__movie--overview {
        transform: translateY(0);
      }
    }
    img {
      width: 100%;
    }
    &--info {
      color: #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem 1rem;
      letter-spacing: 0.5px;
      span {
        background-color: #22254b;
        padding: 0.25rem 0.5rem;
        border-radius: 3px;
        font-weight: bold;
      }
      .red {
        background-color: red;
      }
      .green {
        background-color: green;
      }
      .orange {
        background-color: orange;
      }
    }
    &--overview {
      background-color: white;
      padding: 2rem;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      max-height: 100%;
      transform: translateY(101%);
      transition: transform 0.3s ease-in;
    }
  }
}
</style>

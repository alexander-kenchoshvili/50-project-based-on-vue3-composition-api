<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const pokemons = 53;
const pokeData = ref([]);
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors);
onMounted(async () => {
  for (let i = 1; i <= pokemons; i++) {
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const obj = {
      name: data.name,
      id: data.id,
      types: data.types,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
      type: main_types.find(
        (type) => data.types.map((t) => t.type.name).indexOf(type) > -1
      ),
    };
    pokeData.value.push(obj);
  }
});
</script>

<template>
  <div class="pokemons">
    <h1>Pokedex</h1>

    <div class="pokemons__content">
      <div
        v-for="(pokemon, index) in pokeData"
        class="pokemons__pokemon"
        :style="{ backgroundColor: colors[pokemon.type] }"
      >
        <div class="pokemons__img-content">
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`"
            alt=""
          />
        </div>
        <div class="pokemons__info">
          <span class="pokemons__number"
            >#{{ pokemon?.id.toString().padStart(3, "0") }}</span
          >
          <h3 class="pokemons__name">
            {{ pokemon?.name }}
          </h3>
          <small class="pokemons__type"
            >Type:
            <span>{{ pokemon.type }}</span>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pokemons {
  background: #efefbb;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   min-height: 100vh;
  h1 {
    letter-spacing: 3px;
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
  }
  &__pokemon {
    background-color: #eee;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
  }
  &__img-content {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    text-align: center;
    img {
      max-width: 90%;
      margin-top: 20px;
    }
  }
  &__info {
    margin-top: 20px;
  }
  &__number {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.8em;
  }
  &__name {
    margin: 15px 0 8px;
    text-transform: capitalize;
  }
}
</style>

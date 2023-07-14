<script setup>
import { ref, onMounted } from "vue";
const smallCups = ref(null);
const liters = ref(null);
const remained = ref(null);
const percentage = ref(null);
const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.value.length;

  if (fullCups === 0) {
    percentage.value.style.visibility = "hidden";
    percentage.value.style.height = 0;
  } else {
    percentage.value.style.visibility = "visible";
    percentage.value.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.value.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    remained.value.style.visibility = "hidden";
    remained.value.style.height = 0;
  } else {
    remained.value.style.visibility = "visible";
    liters.value.innerText = `${2 - (250 * fullCups) / 1000}`;
  }
};
const highlightCups = (index) => {
  if (
    smallCups.value[index].classList.contains("full") &&
    smallCups.value[index].nextElementSibling &&
    !smallCups.value[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  if (smallCups.value) {
    smallCups.value.forEach((cup, i) => {
      if (i <= index) {
        cup.classList.add("full");
      } else {
        cup.classList.remove("full");
      }
    });
  }
  updateBigCup();
};
onMounted(() => {
  updateBigCup();
});
</script>

<template>
  <div class="drink-water">
    <h1>Drink Water</h1>
    <h3>Goal: 2 :oters</h3>
    <div class="drink-water__cup">
      <div ref="remained" class="drink-water__remained">
        <span ref="liters"></span>
        <small>Remained</small>
      </div>
      <div ref="percentage" class="drink-water__percentage"></div>
    </div>
    <p class="drink-water__text">Select how many glasses of water that you have drank</p>
    <div class="drink-water__cups">
      <div
        v-for="(item, index) in 8"
        ref="smallCups"
        @click="highlightCups(index)"
        class="drink-water__cup cup-small"
      >
        250 ml
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.drink-water {
  background-color: #3494e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100vh;
  margin-bottom: 40px;
  h1 {
    margin: 10px 0 0;
  }
  h3 {
    font-weight: 400;
    margin: 10px 0;
  }
  &__cups {
    display: flex;
    flex-wrap: wrap;
    width: 280px;
    align-items: center;
    justify-content: center;
    .cup-small {
      height: 95px;
      width: 50px;
      border-radius: 0 0 15px 15px;
      background-color: rgba(225, 225, 225, 0.9);
      cursor: pointer;
      font-size: 14px;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 5px;
      transition: 0.3s ease;
    }
    .cup-small.full {
      background-color: #6ab3f8;
      color: white;
    }
  }
  &__remained {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    flex: 1;
    transition: 0.3s ease;
    span {
      font-size: 20px;
      font-weight: bold;
    }
    small {
      font-size: 12px;
    }
  }
  &__percentage {
    background-color: #6ab3f8;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    height: 0;
    transition: 0.3s ease;
  }
  &__text {
    text-align: center;
    margin: 0 0 5px;
  }
  &__cup {
    background-color: white;
    border: 4px solid #144fc6;
    color: #144fc6;
    border-radius: 0 0 40px 40px;
    height: 330px;
    width: 150px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}
</style>

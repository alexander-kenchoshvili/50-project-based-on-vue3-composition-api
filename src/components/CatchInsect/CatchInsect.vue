<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const screens = ref([]);
const screen1 = ref(null);
const screen2 = ref(null);
const screen3 = ref(null);
const chosenInsect = ref([]);
const seconds = ref(0);
const score = ref(0);
const x = ref();
const y = ref();
const m = ref("00");
const s = ref("00");
const showMessage = ref(false);

const insectRotation = ref(0);

const startGame = () => {
  setInterval(increaseTime, 1000);
};

const increaseTime = () => {
  m.value = formatTime(Math.floor(seconds.value / 60));
  s.value = formatTime(seconds.value % 60);
  seconds.value++;
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const changeScreen = () => {
  if (screens.value) {
    screens.value[0].classList.add("up");
  }
};
const chooseInsect = (insect) => {
  getRandomLocation();
  insectRotation.value = Math.random() * 360;

  chosenInsect.value.push({
    ...insect,
    x: x.value,
    y: y.value,
    caught: false,
  });
  screens.value[1].classList.add("up");
  startGame();
};
const catchInsect = (insect, index) => {
  for (let i = 0; i < 2; i++) {
    setTimeout(
      () => {
        getRandomLocation();
        insectRotation.value = Math.random() * 360;
        chosenInsect.value.push({
          ...insect,
          x: x.value,
          y: y.value,
          rotation: insectRotation.value,
          caught: false,
        });
      },
      i === 0 ? 1000 : 1500
    );
  }
  score.value++;

  if (chosenInsect.value.indexOf(insect) === index) {
    chosenInsect.value[index].caught = true;
  }

  if (score.value === 20) {
    showMessage.value = true;
  }
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  x.value = Math.random() * (width - 200) + 100;
  y.value = Math.random() * (height - 200) + 100;
};

onMounted(() => {
  if (screens.value) {
    screens.value.push(screen1.value, screen2.value, screen3.value);
  }
  document.body.classList.add("custom-background");
});

onUnmounted(() => {
  document.body.classList.remove("custom-background");
});
const insectData = [
  {
    name: "Butterfly",
    src: "https://pngimg.com/uploads/butterfly/butterfly_PNG1009.png",
  },
  {
    name: "Mosquito",
    src: "https://pngimg.com/uploads/mosquito/mosquito_PNG18149.png",
  },
];
</script>

<template>
  <div class="insect">
    <div ref="screen1" class="insect__screen">
      <h1>Catch The Insect</h1>
      <button @click="changeScreen" class="insect__btn">Play Game</button>
    </div>
    <div ref="screen2" class="insect__screen">
      <h1>What is your "favourite" insect?</h1>
      <ul class="insect__list">
        <li v-for="(insect, index) in insectData" :key="index">
          <button @click="chooseInsect(insect)" class="insect__choose-btn">
            <p>{{ insect.name }}</p>
            <img :src="insect.src" :alt="insect.name" />
          </button>
        </li>
      </ul>
    </div>
    <div ref="screen3" class="insect__screen game-container">
      <h3 class="time">Time: {{ m }}:{{ s }}</h3>
      <h3 class="score">Score: {{ score }}</h3>
      <h5 class="message" :class="{ vissible: showMessage }">
        Are you annoyed yet? <br />
        You are playing an impossible game
      </h5>
    </div>
    <div
      v-for="(insect, index) in chosenInsect"
      class="insect__ins"
      :class="{ caught: insect.caught }"
      :style="{ top: `${insect.y}px`, left: `${insect.x}px` }"
      @click="catchInsect(insect, index)"
    >
      <img
        :src="insect.src"
        :alt="insect.name"
        :style="`transform: rotate(${insect.rotation}deg)`"
      />
    </div>
  </div>
</template>

<style lang="scss">
.custom-background {
  background-color: #516dff;
  height: 100vh;
  overflow: hidden;
}
.insect {
  text-align: center;
  color: white;
  h1 {
    line-height: 1.4;
  }
  a {
    color: #fff;
  }

  &__screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    transition: margin 0.5s ease-out;
    // width: 100vw;
    &.up {
      margin-top: -100vh;
    }
    &.game-container {
      position: relative;
      .time,
      .score {
        position: absolute;
        top: 20px;
      }
      .time {
        left: 20px;
      }
      .score {
        right: 20px;
      }

      .message {
        line-height: 1.7;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        padding: 20px;
        z-index: 100;
        text-align: center;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -150%);
        transition: transform 0.4s ease-in;
        &.vissible {
          opacity: 1;
          transform: translate(-50%, 150%);
        }
      }
    }
  }
  &__btn {
    border: 0;
    background-color: #fff;
    color: #516dff;
    padding: 15px 20px;
    cursor: pointer;
    outline: none;
    margin-top: 20px;
    &:hover {
      opacity: 0.9;
    }
  }
  &__choose-btn {
    background-color: transparent;
    border: 2px solid #fff;
    color: white;
    cursor: pointer;
    width: 150px;
    height: 150px;
    transition: 0.5s;
    margin-top: 20px;
    &:hover {
      background-color: #fff;
      color: #516dff;
    }
    &:active {
      background-color: rgba(255, 255, 255, 0.7);
    }

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    li {
      margin: 10px;
    }
  }
  &__ins {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    position: absolute;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.3s ease-in-out;

    &.caught {
      transform: translate(-50%, -50%) scale(0);
    }

    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>

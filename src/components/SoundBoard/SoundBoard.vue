<script setup>
import { ref } from "vue";
import { sounds } from "./SoundBoardData.js";
import { songSrc } from "./SoundBoardData.js";

const button = ref(null);
const audioId = ref(null);

let activeAudio = null;
const handleClick = (i) => {
  audioId.value.forEach((audio, index) => {
    if (i === index) {
      if (activeAudio && activeAudio.play()) {
        activeAudio.pause();
      }
      activeAudio = audio;
      activeAudio.play();
    }
  });
};
</script>

<template>
  <div class="sound-board">
    <audio v-for="(audio, index) in songSrc" ref="audioId" :src="audio.src"></audio>
    <div ref="button" class="sound-board__buttons">
      <button
        v-for="(sound, index) in sounds"
        @click="handleClick(index)"
        class="sound-board__buttons-btn"
      >
        {{ sound }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.sound-board {
  background-color: rgb(161, 100, 223);
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &__buttons {
    &-btn {
      background-color: rebeccapurple;
      border-radius: 5px;
      border: none;
      color: #fff;
      margin: 1rem;
      padding: 1.5rem 3rem;
      font-size: 1.2rem;
      outline: none;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }
}
</style>

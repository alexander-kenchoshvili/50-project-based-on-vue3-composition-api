<script setup>
import { quizData } from "./quizData";
import { ref, computed } from "vue";

const currentQuiz = ref(0);
const score = ref(0);
const selectedAnswer = ref(null);
const showResult = ref(false);

const submitAnswer = () => {
  if (showResult.value) {
    currentQuiz.value = 0;
    score.value = 0;
    selectedAnswer.value = null;
    showResult.value = false;
  } else {
    if (!selectedAnswer.value) return;
    if (selectedAnswer.value !== null) {
      const currentOptions = quizData[currentQuiz.value];
      if (currentOptions.correct === selectedAnswer.value) {
        score.value++;
      }
    }
    selectedAnswer.value = null;
    currentQuiz.value++;
    if (currentQuiz.value > quizData.length - 1) {
      showResult.value = true;
    }
  }
};

const currentOptionsList = computed(() => {
  const currentOptions = quizData[currentQuiz.value];
  return Object.values(currentOptions).filter(
    (value) => value !== currentOptions.question && value !== currentOptions.correct
  );
});
const currentKeyList = computed(() => {
  const currentKey = quizData[currentQuiz.value];
  return Object.keys(currentKey).filter((key) => key !== "question" && key !== "correct");
});
</script>

<template>
  <div class="quiz-app">
    <div class="quiz-app__content">
      <div v-if="!showResult" class="quiz-app__header">
        <h2>{{ quizData[currentQuiz].question }}</h2>
        <ul>
          <li v-for="(option, index) in currentOptionsList" :key="index">
            <input
              type="radio"
              name="answer"
              :value="currentKeyList[index]"
              v-model="selectedAnswer"
              class="quiz-app__answer"
              :id="`option-${index}`"
            />
            <label :for="`option-${index}`">{{ option }}</label>
          </li>
        </ul>
      </div>
      <div class="quiz-app__result" v-else>
        You answered correctly {{ score }} / {{ quizData.length }} questions
      </div>
      <button class="quiz-app__submit" @click="submitAnswer">
        {{ showResult ? "Reload" : "Submit" }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.quiz-app {
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__content {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
    width: 600px;
    overflow: hidden;
  }
  &__header {
    padding: 4rem;
    h2 {
      padding: 1rem;
      text-align: center;
    }
    ul {
      list-style-type: none;
      li {
        font-size: 1.2rem;
        margin: 1rem 0;
        label {
          cursor: pointer;
          margin-left: 10px;
        }
      }
    }
  }
  &__submit {
    background-color: #8e44ad;
    border: none;
    color: #fff;
    display: block;
    width: 100%;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 1.3rem;
    &:hover {
      background-color: #732d91;
    }
    &:focus {
      outline: none;
      background-color: #5e3370;
    }
  }
  &__result {
    text-align: center;
    font-size: 20px;
    padding: 12px;
  }
}
</style>

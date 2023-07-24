<script setup>
import { ref } from "vue";
import HeartIcon from "./SVG/HeartIcon.vue";

const activeRating = ref("Satisfied");
const showResult = ref(false);
const getEmoji = (e) => {
  const ratingElement = e.target.closest(".feedback__rating");
  if (ratingElement) {
    activeRating.value = ratingElement.id;
  }
};
const getResult = () => {
  showResult.value = true;
};
</script>

<template>
  <div class="feedback">
    <div class="feedback__content">
      <template v-if="!showResult">
        <strong
          >How satisfied are you with our <br />
          customer support performace?</strong
        >
        <div class="feedback__ratings" @click="getEmoji">
          <div
            class="feedback__rating"
            :class="{ active: activeRating === 'unhappy' }"
            id="unhappy"
          >
            <img
              src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
              alt=""
            />
            <small>Unhappy</small>
          </div>
          <div
            class="feedback__rating"
            :class="{ active: activeRating === 'neutral' }"
            id="neutral"
          >
            <img
              src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
              alt=""
            />
            <small>Neutral</small>
          </div>
          <div
            class="feedback__rating"
            :class="{ active: activeRating === 'satisfied' }"
            id="satisfied"
          >
            <img
              src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
              alt=""
            />
            <small>Satisfied</small>
          </div>
        </div>
        <button @click="getResult" class="feedback__btn">Send Review</button>
      </template>
      <template v-else>
        <HeartIcon class="feedback__svg" />
        <strong>Thank you</strong>
        <br />
        <strong>Feedback: {{ activeRating }}</strong>
        <p>We'll use your feedback to improve our customer support</p>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.feedback {
  background: #fef9f2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__content {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    font-size: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    max-width: 400px;
    text-align: center;

    strong {
      line-height: 20px;
    }
  }
  &__ratings {
    display: flex;
    margin: 20px 0;
  }
  &__rating {
    flex: 1;
    cursor: pointer;
    padding: 20px;
    margin: 10px 5px;
    &:hover,
    &.active {
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      small {
        color: #111;
      }
    }
    img {
      width: 40px;
    }
    small {
      color: #555;
      display: inline-block;
      margin: 10px 0 0;
    }
  }
  &__btn {
    background-color: #302d2b;
    color: white;
    border: 0;
    border-radius: 4px;
    padding: 12px 30px;
    cursor: pointer;
    outline: none;
    &:active {
      transform: scale(0.98);
    }
  }
  &__svg {
    margin-bottom: 20px;
    width: 30px;
    height: 30px;
    path {
      fill: red;
    }
  }
}
</style>

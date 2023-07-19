<script setup>
import { ref, onMounted } from "vue";

const counter = ref(null);
const showFinalMessage = ref(null);
const nums = ref([]);

const getAnimation = () => {
  nums.value.forEach((num, idx) => {
    const nextToLast = nums.value.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("animated-countdown__in");
        num.classList.add("animated-countdown__out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("animated-countdown__in");
      } else {
        counter.value.classList.add("hide");
        showFinalMessage.value.classList.add("show");
      }
    });
  });
};

const replay = () => {
  counter.value.classList.remove("hide");
  showFinalMessage.value.classList.remove("show");
  nums.value.forEach((num) => {
    num.classList.value = "";
  });
  nums.value[0].classList.add("animated-countdown__in");
};
onMounted(() => {
  getAnimation();
});
</script>

<template>
  <div class="animated-countdown">
    <div class="animated-countdown__counter" ref="counter">
      <div class="animated-countdown__nums">
        <span
          v-for="(item, index) in 4"
          ref="nums"
          :class="{ 'animated-countdown__in': index === 0 }"
          >{{ 3 - index }}</span
        >
      </div>
      <h4>Get Ready</h4>
    </div>

    <div class="animated-countdown__final" ref="showFinalMessage">
      <h1>Go</h1>
      <button @click="replay" class="animated-countdown__replay">Replay</button>
    </div>
  </div>
</template>

<style lang="scss">
.animated-countdown {
  height: 100vh;
  overflow: hidden;
  &__counter {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h4 {
      font-size: 20px;
      margin: 5px;
      text-transform: uppercase;
    }
    &.hide {
      transform: translate(-50%, -50%) scale(0);
      animation: hide 0.2s ease-out;
    }
  }
  &__final {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    &.show {
      transform: translate(-50%, -50%) scale(1);
      animation: show 0.2s ease-out;
    }
  }

  &__nums {
    color: #3498db;
    font-size: 50px;
    position: relative;
    overflow: hidden;
    width: 250px;
    height: 50px;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(123deg);
      transform-origin: bottom center;
    }
  }
  &__in {
    transform: translate(-50%, -50%) rotate(0deg);
    animation: goIn 0.5s ease-in-out;
  }
  &__out {
    animation: goOut 0.5s ease-in-out;
  }
  @keyframes hide {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(0);
    }
  }
  @keyframes show {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    30% {
      transform: translate(-50%, -50%) scale(1.4);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes goIn {
    0% {
      transform: translate(-50%, -50%) rotate(180deg);
    }
    30% {
      transform: translate(-50%, -50%) rotate(-20deg);
    }
    60% {
      transform: translate(-50%, -50%) rotate(10deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
  @keyframes goOut {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    60% {
      transform: translate(-50%, -50%) rotate(20deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-123deg);
    }
  }
}
</style>

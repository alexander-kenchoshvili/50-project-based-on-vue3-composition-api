<script setup>
import { onMounted, ref } from "vue";
const toggleMode = ref("Dark Mode");
const hourEl = ref(null);
const minuteEl = ref(null);
const secondEl = ref(null);
const timeEl = ref(null);
const dateEl = ref(null);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

onMounted(() => {
  setInterval(setTime, 1000);
});
const toggle = () => {
  const clockMode = document.querySelector(".clock-mode");
  if (clockMode.classList.contains("dark")) {
    clockMode.classList.remove("dark");
    toggleMode.value = "Dark Mode";
  } else {
    clockMode.classList.add("dark");
    toggleMode.value = "Light Mode";
  }
};
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hour = time.getHours();
  const hoursForClock = hour % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";
  if (hourEl.value) {
    hourEl.value.style.transform = `translate(-50%, -100%) rotate(${scale(
      hoursForClock,
      0,
      11,
      0,
      360
    )}deg)`;
  }
  if (minuteEl.value) {
    minuteEl.value.style.transform = `translate(-50%, -100%) rotate(${scale(
      minutes,
      0,
      59,
      0,
      360
    )}deg)`;
  }
  if (secondEl.value) {
    secondEl.value.style.transform = `translate(-50%, -100%) rotate(${scale(
      seconds,
      0,
      59,
      0,
      360
    )}deg)`;
  }
  if (timeEl.value) {
    timeEl.value.innerHTML = `${hoursForClock}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${ampm}`;
  }
  if (dateEl.value) {
    dateEl.value.innerHTML = `${days[day]}, ${months[month]}  <span class="clock__circle">${date}</span>`;
  }
};
</script>

<template>
  <div class="clock-mode">
    <div class="clock">
      <div class="clock__toggle" @click="toggle">{{ toggleMode }}</div>
      <div class="clock__content">
        <div class="clock__inner">
          <div ref="hourEl" class="clock__needle hour"></div>
          <div ref="minuteEl" class="clock__needle minute"></div>
          <div ref="secondEl" class="clock__needle second"></div>
          <div class="clock__center-point"></div>
        </div>
        <div ref="timeEl" class="clock__time"></div>
        <div ref="dateEl" class="clock__date"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #000;
  --secondary-color: #fff;
}
.clock-mode {
  transition: all 0.5s ease-in;
}
.clock-mode.dark {
  --primary-color: #fff;
  --secondary-color: #333;
}
.clock-mode.dark {
  background-color: #111;
  color: #fff;
}
.clock {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;

  &__toggle {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border-radius: 4px;
    padding: 8px 12px;
    position: absolute;
    top: 100px;
    cursor: pointer;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  &__inner {
    position: relative;
    width: 200px;
    height: 200px;
    // background-color: #f0f0f0;
  }
  &__needle {
    background-color: var(--primary-color);
    position: absolute;
    top: 50%;
    left: 50%;
    height: 65px;
    width: 3px;
    transform-origin: bottom center;
    transition: all 0.5s ease-in;
    &.hour {
      transform: translate(-50%, -100%) rotate(0deg);
    }
    &.minute {
      transform: translate(-50%, -100%) rotate(0deg);
      height: 100px;
    }
    &.second {
      transform: translate(-50%, -100%) rotate(0deg);
      height: 100px;
      background-color: #e74c3c;
    }
  }
  &__center-point {
    background-color: #e74c3c;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    &::after {
      content: "";
      background-color: var(--primary-color);
      width: 5px;
      height: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
  }
  &__time {
    font-size: 60px;
  }
  &__date {
    color: #aaa;
    font-size: 14px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }
  &__circle {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border-radius: 50%;
    height: 18px;
    width: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 18px;
    transition: all 0.5s ease-in;
    font-size: 12px;
  }
}
</style>

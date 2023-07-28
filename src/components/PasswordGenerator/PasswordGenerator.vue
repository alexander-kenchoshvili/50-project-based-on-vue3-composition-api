<script setup>
import Clipboard from "./SVG/Clipboard.vue";
import { ref } from "vue";
const lengthEl = ref(12);
const lowercaseEl = ref(true);
const uppercaseEl = ref(true);
const numberEl = ref(true);
const symbolEl = ref(true);
const getPass = ref("");
const showAlert = ref(false);

const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);
const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const generatePassword = () => {
  let generatedPassword = "";
  const typesCount =
    lowercaseEl.value + uppercaseEl.value + numberEl.value + symbolEl.value;
  const typesArr = [
    { lower: lowercaseEl.value },
    { upper: uppercaseEl.value },
    { number: numberEl.value },
    { symbol: symbolEl.value },
  ].filter((item) => Object.values(item)[0]);

  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < lengthEl.value; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  getPass.value = generatedPassword.slice(0, lengthEl.value);
};

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(getPass.value)
    .then(() => {
      console.log("Password copied to clipboard");
      if (getPass.value !== "") {
        showAlert.value = true;
      }
    })
    .catch((error) => {
      console.error("Failed to copy password to clipboard:", error);
    });

  setTimeout(() => (showAlert.value = false), 1500);
};
</script>

<template>
  <div class="pass-generator">
    <div class="pass-generator__content">
      <h2>Password Generator</h2>
      <div class="pass-generator__result-content">
        <span class="pass-generator__result">{{ getPass }}</span>
        <button class="pass-generator__btn" @click="copyToClipboard">
          <Clipboard />
        </button>
        <div class="pass-generator__alert" :class="{ show: showAlert }">copied</div>
      </div>
      <div class="pass-generator__settings">
        <div class="pass-generator__setting">
          <label>Password length</label>
          <input type="number" min="4" max="20" v-model="lengthEl" />
        </div>
        <div class="pass-generator__setting">
          <label>Include uppercase letters</label>
          <input type="checkbox" v-model="uppercaseEl" />
        </div>
        <div class="pass-generator__setting">
          <label>Include lowercase letters</label>
          <input type="checkbox" v-model="lowercaseEl" />
        </div>
        <div class="pass-generator__setting">
          <label>Include numbers</label>
          <input type="checkbox" v-model="numberEl" />
        </div>
        <div class="pass-generator__setting">
          <label>Include symbols</label>
          <input type="checkbox" v-model="symbolEl" />
        </div>
      </div>
      <button
        @click="generatePassword"
        class="pass-generator__btn pass-generator__btn-large"
      >
        Generate Password
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.pass-generator {
  background-color: #3b3b98;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
  h2 {
    margin: 10px 0 20px;
    text-align: center;
  }
  &__content {
    background-color: #23235b;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
    padding: 20px;
    width: 350px;
    max-width: 100%;
  }
  &__result-content {
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 12px 10px;
    height: 50px;
    width: 100%;
    .pass-generator__btn {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 40px;
      height: 40px;
      svg {
        path {
          fill: white;
        }
      }
    }
  }
  &__result {
    word-wrap: break-word;
    max-width: calc(100% - 40px);
  }
  &__btn {
    border: none;
    background-color: #3b3b98;
    color: white;
    font-size: 16px;
    padding: 8px 12px;
    cursor: pointer;
    &-large {
      display: block;
      width: 100%;
    }
  }
  &__setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
  }
  &__alert {
    color: white;
    position: absolute;
    top: -28px;
    right: -19px;
    background-color: #3b3b98;
    padding: 5px;
    font-size: 12px;
    transform: scale(0);
    transition: 0.5s ease-in-out;
    &.show {
      transform: scale(1);
    }
  }
}
</style>

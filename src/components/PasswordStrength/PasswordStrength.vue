<script setup>
import { ref } from "vue";
const password = ref("");
const blur = ref();

const blurHandler = () => {
  blur.value = 21 - 2 * password.value.length;
  if (blur.value < 0) {
    blur.value = 0;
  }
};
</script>

<template>
  <div class="pass-strength">
    <div
      class="pass-strength__background"
      :style="{ filter: 'blur(' + blur + 'px)' }"
    ></div>

    <div class="pass-strength__content">
      <h1>Image Password Strength</h1>
      <p>Change the password to see the effect</p>
      <div class="pass-strength__form">
        <label for="email">Email</label>
        <input type="text" name="email" placeholder="Enter Email" />
      </div>
      <div class="pass-strength__form">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          @input="blurHandler"
          name="password"
          placeholder="Enter Password"
        />
      </div>
      <button>Submit</button>
    </div>
  </div>
</template>

<style lang="scss">
.pass-strength {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  &__background {
    background: url("https://images.unsplash.com/photo-1556745757-8d76bdb6984b") no-repeat
      center center/cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(20px);
  }
  &__content {
    background-color: #fff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06);

    border-radius: 8px;
    padding: 10px;
    text-align: center;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 12px;
      color: gray;
      font-weight: bold;
    }
    button {
      background-color: #000;
      color: #fff;
      padding: 6px 0;
      margin-top: 10px;
      display: inline-block;
      width: 100%;
      border-radius: 8px;
      outline: none;
      border: none;
    }
  }
  &__form {
    margin: 10px 0;
    text-align: left;
    label {
      color: gray;
    }
    input {
      display: block;
      width: 100%;
      padding: 8px;
      margin-top: 8px;
      border: none;
      border-radius: 8px;
      border: 1px solid lightblue;
      outline: none;
    }
  }
}
</style>

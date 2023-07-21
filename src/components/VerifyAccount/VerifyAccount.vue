<script setup>
import { ref, onMounted } from "vue";
const input = ref(Array(6).fill(""));
const inputRef = ref(null);

onMounted(() => {
  if (inputRef.value) {
    inputRef.value[0].focus();
  }
});
const inputFocus = (index, e) => {
  if (e.key >= 0 && e.key <= 9) {
    input.value[index] = "";
    if (index < 5) {
      setTimeout(() => {
        inputRef.value[index + 1].focus();
      }, 0);
    } else {
      setTimeout(() => {
        inputRef.value[index].blur();
      }, 0);
    }
  } else if (e.key === "Backspace") {
    if (index > 0) {
      setTimeout(() => {
        inputRef.value[index - 1].focus();
      }, 0);
    }
  }
};
</script>

<template>
  <div class="verify-account">
    <div class="verify-account__content">
      <h2>Verify Your Account</h2>
      <p>
        We emailed you the six digit code to example@gmail.com <br />
        Enter the code below to confirm your email address.
      </p>
      <div class="verify-account__codes">
        <input
          v-for="(item, index) in 6"
          @keydown="inputFocus(index, $event)"
          class="verify-account__code"
          type="number"
          placeholder="0"
          min="0"
          max="9"
          required
          v-model="input[index]"
          ref="inputRef"
        />
      </div>
      <small class="verify-account__info">
        This is design only. we didn't actually send you an email as we don't have your
        email, right?
      </small>
    </div>
  </div>
</template>

<style lang="scss">
.verify-account {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fbfcfe;
  &__content {
    background-color: #fff;
    border: 3px #000 solid;
    border-radius: 10px;
    padding: 30px;
    max-width: 1000px;
    text-align: center;
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
  }
  &__codes {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 20px;
    appearance: textfield;
  }
  &__code {
    border-radius: 5px;
    font-size: 75px;
    height: 120px;
    width: 100px;
    border: 1px solid #eee;
    margin: 1%;
    text-align: center;
    font-weight: 300;
    @media (max-width) {
      font-size: 60px;
      height: 80px;
      max-width: 70px;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:valid {
      border-color: #3498db;
      box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);
    }
  }
  &__info {
    background-color: #eaeaea;
    display: inline-block;
    padding: 10px;
    line-height: 20px;
    max-width: 400px;
    color: #777;
    border-radius: 5px;
  }
}
</style>

<script setup>
import { onMounted, ref } from "vue";
const labels = ref([]);
const emailLabel = ref(null);
const passwordLabel = ref(null);
onMounted(() => {
  labels.value.push(emailLabel.value, passwordLabel.value);
  labels.value.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, index) =>
          `<span style="transition-delay:${index * 50}ms" >${letter}</span>`
      )
      .join("");
  });
});
</script>

<template>
  <div class="form-wave__wrapper">
    <div class="form-wave__content">
      <h1>Please Log In</h1>
      <div class="form-wave__form-control">
        <div class="form-wave__input-wrapper">
          <input type="text" />
          <label ref="emailLabel" class="form-wave__label">Email</label>
        </div>
        <div class="form-wave__input-wrapper">
          <input type="password" />
          <label ref="passwordLabel" class="form-wave__label">Password</label>
        </div>
        <button class="form-wave__submit">Login</button>
        <p class="form-wave__text">Dont't have an account? <a href="#">Register</a></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.form-wave {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: steelblue;
    color: white;
  }
  &__content {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 40px;
    border-radius: 5px;
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    a {
      text-decoration: none;
      color: lightblue;
    }
  }
  &__input-wrapper {
    position: relative;
    margin: 20px 0 40px;
    width: 300px;
    input {
      background-color: transparent;
      border: 0;
      border-bottom: 2px #fff solid;
      display: block;
      width: 100%;
      padding: 15px 0;
      font-size: 18px;
      color: white;
      outline: none;
      &:focus {
        border-bottom-color: lightblue;
      }
      &:focus + label span {
        color: lightblue;
        transform: translateY(-30px);
      }
    }
  }
  &__submit {
    cursor: pointer;
    display: inline-block;
    width: 100%;
    background-color: lightblue;
    padding: 15px;
    font-size: 16px;
    border: 0;
    border-radius: 5px;
    &:active {
      transform: scale(0.98);
    }
  }
  &__text {
    margin-top: 30px;
  }
  &__label {
    position: absolute;
    top: 15px;
    left: 0;
    span {
      display: inline-block;
      font-size: 18px;
      min-width: 5px;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
}
</style>

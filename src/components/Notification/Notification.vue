<script setup>
import { ref } from "vue";
const showNotification = ref(false);
const notification = () => {
  showNotification.value = true;
  setTimeout(() => (showNotification.value = false), 2000);
};
</script>

<template>
  <div class="notification">
    <div class="notification__toasts">
      <div v-if="showNotification" class="notification__toasts--toast">hello</div>
    </div>
    <button @click="notification" class="notification__button">Show Notification</button>
  </div>
</template>

<style lang="scss">
.notification {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rebeccapurple;
  height: 100vh;
  &__toasts {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    &--toast {
      background-color: #fff;
      color: rebeccapurple;
      border-radius: 5px;
      padding: 1rem 2rem;
      margin: 0.5rem;
    }
  }
  &__button {
    background-color: #fff;
    color: rebeccapurple;
    font-weight: bold;
    padding: 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;
    &:active {
      transform: scale(0.98);
    }
  }
}
</style>

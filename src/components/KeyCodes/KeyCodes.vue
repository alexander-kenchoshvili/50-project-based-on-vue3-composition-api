<script setup>
import { onMounted, ref } from "vue";
const insert = ref(null);

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    insert.value.innerHTML = `
    <div class="keycodes__keycode">
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
      </div>
      <div class="keycodes__keycode">
        ${e.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="keycodes__keycode">
        ${e.code}
        <small>event.code</small>
      </div>
      `;
  });
});
</script>

<template>
  <div class="keycodes">
    <div ref="insert" class="keycodes__wrapper">
      <div class="keycodes__keycode">Press any key to get the keyCode and code</div>
    </div>
  </div>
</template>

<style lang="scss">
.keycodes {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  &__keycode {
    border: 1px solid #999;
    background-color: #eee;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    padding: 20px;
    flex-direction: column;
    margin: 10px;
    font-weight: bold;
    min-width: 150px;
    position: relative;
    small {
      position: absolute;
      top: -24px;
      left: 0;
      text-align: center;
      width: 100%;
      color: #555;
      font-size: 14px;
    }
  }
}
</style>

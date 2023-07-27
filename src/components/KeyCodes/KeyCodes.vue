<script setup>
import { reactive, onMounted, onBeforeUnmount, ref } from "vue";
const keyInfo = reactive({
  eKey: "",
  ekeyCode: "",
  eCode: "",
});

const showKeycodes = ref(false);

const onKeydown = (e) => {
  if (keyInfo) {
    keyInfo.eKey = e.key;
    keyInfo.ekeyCode = e.keyCode;
    keyInfo.eCode = e.code;
    showKeycodes.value = true;
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <div class="keycodes">
    <div class="keycodes__wrapper">
      <div v-if="!showKeycodes" class="keycodes__keycode">
        Press any key to get the keyCode and code
      </div>
      <div v-if="showKeycodes" class="keycodes__keycode">
        {{ keyInfo.eKey === " " ? "Space" : keyInfo.eKey }}
        <small>event.key</small>
      </div>
      <div v-if="showKeycodes" class="keycodes__keycode">
        {{ keyInfo.ekeyCode }}
        <small>event.keyCode</small>
      </div>
      <div v-if="showKeycodes" class="keycodes__keycode">
        {{ keyInfo.eCode }}
        <small>event.code</small>
      </div>
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

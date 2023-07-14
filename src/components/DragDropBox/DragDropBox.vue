<script setup>
import { ref } from "vue";
const dropIndex = ref(0);
const addHold = ref(false);
const addInvisible = ref(false);
const boxes = 7;
const addHover = ref(Array(boxes).fill(false));

const dragStart = () => {
  addHold.value = true;
  setTimeout(() => (addInvisible.value = true), 0);
};
const dragEnd = () => {
  addHold.value = false;
  addInvisible.value = false;
};
const dragDrop = (index) => {
  dropIndex.value = index;
  addHover.value = addHover.value.map(() => false);
};
const dragEnter = (index) => {
  addHover.value[index] = true;
};

const dragLeave = (index) => {
  addHover.value[index] = false;
};
</script>

<template>
  <div class="drag-drop">
    <div
      v-for="(item, index) in boxes"
      class="drag-drop__empty"
      :class="{ hovered: addHover[index] }"
      @dragenter.prevent="dragEnter(index)"
      @dragleave.prevent="dragLeave(index)"
      @dragover.prevent
      @drop.prevent="dragDrop(index)"
    >
      <div
        v-if="dropIndex === index"
        :class="{
          'drag-drop__empty--fill': !addInvisible,
          hold: addHold && !addInvisible,
          invisible: addInvisible,
        }"
        v-on:dragstart="dragStart"
        v-on:dragend="dragEnd"
        draggable="true"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.drag-drop {
  background-color: steelblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  &__empty {
    height: 150px;
    width: 150px;
    margin: 10px;
    border: 3px solid black;
    background-color: white;
    &--fill {
      background-image: url("https://source.unsplash.com/random/150x150");
      height: 145px;
      width: 145px;
      cursor: pointer;
      &.hold {
        border: 5px solid #ccc;
      }
    }
  }
  .hovered {
    background-color: #333;
    border-color: white;
    border-style: dashed;
  }
}
</style>

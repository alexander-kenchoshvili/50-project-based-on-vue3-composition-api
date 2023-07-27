<script setup>
import { ref, watch } from "vue";

const textarea = ref(null);
const text = ref("");
const tags = ref(null);
const tag = ref(null);

watch([text], () => {
  tags.value = text.value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
});
const enterHandler = (event) => {
  setTimeout(() => {
    event.target.value = "";
  }, 10);
  randomSelect();
};

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};
const pickRandomTag = () => {
  return tag.value[Math.floor(Math.random() * tag.value.length)];
};

const highlightTag = (tag) => {
  tag.classList.add("highlight");
};

const unHighlightTag = (tag) => {
  tag.classList.remove("highlight");
};
</script>

<template>
  <div class="random">
    <div class="random__wrapper">
      <h3>
        Enter All of the choices divided by a comma (',') <br />Press enter when you're
        done
      </h3>
      <textarea
        ref="textarea"
        v-model="text"
        class="random__text"
        placeholder="Enter choices here ..."
        @keyup.enter="enterHandler"
      >
      </textarea>
      <div class="random__tags">
        <span v-for="tagText in tags" ref="tag" class="random__tag">{{ tagText }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.random {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #2b99f0;
  h3 {
    color: white;
    margin: 10px 0 20px;
    text-align: center;
  }
  &__wrapper {
    width: 500px;
  }
  &__text {
    border: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0 0 20px;
    font-size: 16px;
    outline: none;
  }
  &__tag {
    background-color: #f0932b;
    color: white;
    border-radius: 50px;
    padding: 10px 20px;
    margin: 0 5px 10px 0;
    font-size: 14px;
    display: inline-block;
    &.highlight {
      background-color: #273c75;
    }
  }
}
</style>

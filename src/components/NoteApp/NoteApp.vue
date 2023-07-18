<script setup>
import { ref, onMounted } from "vue";
import AddButton from "./SVG/AddButton.vue";
import EditButton from "./SVG/EditButton.vue";
import DeleteButton from "./SVG/DeleteButton.vue";

const notes = ref([]);

const addNote = () => {
  notes.value.push({
    text: "",
    showEditor: false,
  });
};

const deleteNote = (index) => {
  notes.value.splice(index, 1);
  saveNotes();
};

const toggleEditor = (index) => {
  notes.value[index].showEditor = !notes.value[index].showEditor;
};

const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes.value));
};

onMounted(() => {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notes.value = JSON.parse(savedNotes);
  }
});
</script>

<template>
  <div class="note-app">
    <button class="note-app__add" @click="addNote"><AddButton /> Add button</button>
    <div v-for="(note, index) in notes" class="note-app__note">
      <div class="note-app__tools">
        <button class="note-app__edit" @click="toggleEditor(index)">
          <EditButton />
        </button>
        <button @click="deleteNote(index)" class="note-app__delete">
          <DeleteButton />
        </button>
      </div>
      <div v-if="!note.showEditor" class="note-app__main">{{ note.text }}</div>
      <textarea v-if="note.showEditor" v-model="note.text" @input="saveNotes"></textarea>
    </div>
  </div>
</template>

<style lang="scss">
.note-app {
  display: flex;
  flex-wrap: wrap;
  padding-top: 3rem;
  background-color: #7bdaf3;
  height: 100vh;
  &__add {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background-color: #9ec862;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
    path {
      fill: white;
    }
  }
  &__note {
    background-color: #fff;
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
    margin: 30px 20px;
    height: 400px;
    width: 400px;
    textarea {
      outline: none;
      font-size: 1.2rem;
      border: none;
      height: 400px;
      width: 400px;
      padding: 20px;
    }
  }
  &__tools {
    background-color: #9ec862;
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      margin-left: 0.5rem;
      svg {
        width: 20px;
        height: 20x;
      }
      path {
        fill: #fff;
      }
    }
  }
  &__main {
    padding: 20px;
  }
}
</style>

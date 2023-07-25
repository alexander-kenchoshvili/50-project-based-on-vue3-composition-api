<script setup>
import { ref, onMounted } from "vue";

const inputValue = ref("");
const todos = ref([]);

const submitTodo = () => {
  if (inputValue.value.trim() !== "") {
    todos.value.push({
      text: inputValue.value,
      completed: false,
    });
    inputValue.value = "";
  }
  localStorage.setItem("todos", JSON.stringify(todos.value));
};

const toggleCompleted = (todo) => {
  todo.completed = !todo.completed;
  localStorage.setItem("todos", JSON.stringify(todos.value));
};

const deleteTodo = (index) => {
  todos.value.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos.value));
};

onMounted(() => {
  const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  todos.value = savedTodos;
});
</script>

<template>
  <div class="todo">
    <h1>todos</h1>
    <div class="todo__content" @keypress.enter="submitTodo">
      <input
        type="text"
        class="todo__input"
        placeholder="Enter your todo"
        autocomplete="off"
        v-model="inputValue"
      />
      <ul class="todo__todos">
        <li
          v-for="(todo, index) in todos"
          :key="index"
          :class="{ completed: todo.completed }"
          @click="toggleCompleted(todo)"
          @contextmenu.prevent="deleteTodo(index)"
        >
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <small
      >Left click to toggle completed. <br />
      Right click to delete todo
    </small>
  </div>
</template>

<style lang="scss">
.todo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  color: #444;
  h1 {
    color: rgb(179, 131, 226);
    font-size: 10rem;
    text-align: center;
    opacity: 0.4;
  }
  &__content {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    width: 400px;
  }
  &__input {
    border: none;
    color: #444;
    font-size: 2rem;
    padding: 1rem 2rem;
    display: block;
    width: 100%;
    &::placeholder {
      color: #d5d5d5;
    }
    &:focus {
      outline-color: rgb(179, 131, 226);
    }
  }
  &__todos {
    background-color: #fff;
    list-style-type: none;

    li {
      border-top: 1px solid #e5e5e5;
      cursor: pointer;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      &.completed {
        color: #b6b6b6;
        text-decoration: line-through;
      }
    }
  }
  small {
    color: #b5b5b5;
    margin-top: 3rem;
    text-align: center;
  }
}
</style>

<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <todo-spinner v-if="loading" />
      <template v-else>
        <todo-form />
        <todo-empty v-if="$store.state.todos.length <= 0" />
        <todo-items v-else />
      </template>
    </div>
  </div>
</template>
<script>
import TodoEmpty from "./components/TodoEmpty.vue";
import TodoForm from "./components/TodoForm.vue";
import TodoItems from "./components/TodoItems.vue";
import TodoSpinner from "./components/TodoSpinner.vue";

export default {
  components: { TodoSpinner, TodoForm, TodoItems, TodoEmpty },
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  created() {
    this.loading = true;
    this.$store.dispatch("getTodos").finally(() => (this.loading = false));
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="space-y-2">
    <todo-item
      v-for="todos in $store.state.todos"
      :key="todos.id"
      :task="todos"
    />
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
};
</script>

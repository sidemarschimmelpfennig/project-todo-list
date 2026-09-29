<template>
  <div class="space-y-2">
    <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :task="todo" />
  </div>
</template>

<script setup lang="ts">
import { TodoItem } from '@/components/ui'

const todoStore = useTodoStore()
</script>

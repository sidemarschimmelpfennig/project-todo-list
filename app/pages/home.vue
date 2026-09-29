<script setup lang="ts">
import { TodoSpinner, TodoForm, TodoEmpty, TodoItems } from '@/components/ui'

const todoStore = useTodoStore()

const loading = ref(false)
const error = ref<unknown>(null)

onMounted(async () => {
  loading.value = true

  try {
    const response = await todoStore.getTodos()
    console.log(response)
  } catch (err) {
    error.value = err
    console.error('Erro ao carregar tarefas:', err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="px-3 py-10 md:px-10">
    <header></header>
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner v-if="loading" />

      <template v-else>
        <TodoForm />

        <TodoEmpty v-if="todoStore.todos.length === 0" />

        <TodoItems v-else />
      </template>
    </div>
  </div>
</template>

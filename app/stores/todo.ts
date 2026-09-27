import { defineStore } from 'pinia'

interface Todo {
  id: string
  title: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const { $api } = useNuxtApp()

  const todos = ref<Todo[]>([])

  const storeTodos = (data: Todo[]) => {
    todos.value = data
  }

  const addTodo = (data: Todo) => {
    const index = todos.value.findIndex((todo) => todo.id === data.id)

    if (index >= 0) {
      todos.value.splice(index, 1, data)
      return
    }

    todos.value.unshift(data)
  }

  const deleteTodo = (id: string) => {
    const index = todos.value.findIndex((todo) => todo.id === id)

    if (index >= 0) {
      todos.value.splice(index, 1)
    }
  }

  const getTodos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const response = await $api.get<Todo[]>('/todos')
    console.log(response)
    storeTodos(response.data)
  }

  const addTask = async (data: Omit<Todo, 'id'>) => {
    const response = await $api.post<Todo>('/todos', data)

    addTodo(response.data)
  }

  const updateTask = async (id: string, data: Partial<Omit<Todo, 'id'>>) => {
    const response = await $api.put<Todo>(`/todos/${id}`, data)

    addTodo(response.data)
  }

  const deleteTask = async (id: string) => {
    await $api.delete(`/todos/${id}`)

    deleteTodo(id)
  }

  return {
    todos,
    getTodos,
    addTask,
    updateTask,
    deleteTask
  }
})

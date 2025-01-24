import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    storeTodos(state, data) {
      state.todos = data;
    },
    addTodo(state, data) {
      const index = state.todos.indexOf(task => task.id === data.id);
      if (index >= 0) {
        state.todos.splice(index, 1, data);
      } else {
        state.todos.unshift(data);
      }
    },
    deleteTodo(state, id) {
      const index = state.todos.filter(task => task.id === id);

      if (index.length >= 0) {
        state.todos.splice(index, 1);
      }
    },
  },
  actions: {
    getTodos({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          return axios
            .get("http://localhost:3000/todos")
            .then(response => {
              commit("storeTodos", response.data);
              resolve();
            })
            .catch(err => reject(err));
        }, 3000);
      });
    },
    addTasks({ commit }, data) {
      axios.post("http://localhost:3000/todos", data).then(response => {
        commit("addTodo", response.data);
      });
    },
    updateTask({ commit }, { id, data }) {
      return axios
        .put(`http://localhost:3000/todos/${id}`, data)
        .then(response => {
          commit("addTodo", response.data);
        });
    },
    deleteTask(context, id) {
      return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        context.commit("deleteTodo", id);
      });
    },
  },
  modules: {},
});

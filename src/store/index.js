import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      listOfTodo: [],
    };
  },
  getters: {
    updateTodoList: (state) => state.listOfTodo,
  },
  mutations: {
    // get list of todo
    getListOfData(state, listOfTodo) {
      state.listOfTodo = listOfTodo;
    },
    // delete item of todo
    deleteTodoItem(state, id) {
      const modifiedItems = store.state.listOfTodo.filter(
        (item) => item.id !== id
      );
      state.listOfTodo = modifiedItems;
    },
    // add item of todo
    addTodo(state, payload) {
      state.listOfTodo.push(payload);
    },
    // task item is done
    taskIsDone(state, payload) {
      const modifiedItems = state.listOfTodo.map((item, i) =>
        i === payload.index ? { ...item, done: payload.isDone } : item
      );
      state.listOfTodo = modifiedItems;
    },
  },
  actions: {
    async getListOfTodo({ commit }) {
      await axios
        .get("https://mocki.io/v1/85cdb297-3a21-472e-b87a-eeade2d214a2")
        .then((response) => {
          commit("getListOfData", response.data);
        });
    },
    async deleteTodo({ state, commit }, id) {
      var updatedList = state.listOfTodo.filter((item) => item.id !== id);
      await commit("deleteTodoItem", updatedList);
    },
  },
});

export default store;

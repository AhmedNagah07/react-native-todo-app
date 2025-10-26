import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.allTodos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
    toggleTodo: (state, action) => {
      const todoId = action.payload;
      const todo = state.allTodos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setInitialTodos: (state, action) => {
      state.allTodos = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, setInitialTodos } =
  todosSlice.actions;
export default todosSlice;

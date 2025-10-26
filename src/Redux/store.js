const { configureStore } = require("@reduxjs/toolkit");
import todosSlice from "./slices/todos.slices";

console.log("REDUX STORE FILE EXECUTING");
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;

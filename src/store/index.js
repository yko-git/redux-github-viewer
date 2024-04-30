import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../storeSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;

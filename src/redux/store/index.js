import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todoSlice";
import modalReducer from "../modalSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    modal: modalReducer,
  },
});

export default store;

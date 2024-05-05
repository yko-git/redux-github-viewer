import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../storeSlice";
import modalReducer from "../modalSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    modal: modalReducer,
  },
});

export default store;

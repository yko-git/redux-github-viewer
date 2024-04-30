import { createSlice } from "@reduxjs/toolkit";

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();

const store = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        author: "MITANI",
        createday: `${year}/${month}/${date}`,
        updateday: `${year}/${month}/${date}`,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addTodo, deleteTodo } = store.actions;
export default store.reducer;

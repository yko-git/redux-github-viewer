import { createSlice } from "@reduxjs/toolkit";
import issueData from "../../utils/issueData";

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();

const todo = createSlice({
  name: "todos",
  initialState: issueData,
  reducers: {
    addTodo: (state, action) => {
      const newId = crypto.getRandomValues(new Uint16Array(10));

      const newTodo = {
        id: newId.join(""),
        title: action.payload.title,
        text: action.payload.text,
        status: action.payload.status,
        author: "MITANI",
        createday: `${year}/${month}/${date}`,
        updateday: `${year}/${month}/${date}`,
      };

      state.push(newTodo);
    },
    updateTodo: (state, action) => {
      const todo = state.find((it) => it.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.text = action.payload.text;
        todo.status = action.payload.issueStatus;
      }
    },
    deleteTodo: (state, action) => {
      Object.keys(action.payload).forEach((id) => {
        const index = state.findIndex((it) => it.id === id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
    },
  },
});
export const { addTodo, updateTodo, deleteTodo } = todo.actions;
export default todo.reducer;

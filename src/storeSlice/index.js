import { createSlice } from "@reduxjs/toolkit";
import issueData from "../utils/issueData";

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();

const store = createSlice({
  name: "todos",
  initialState: issueData,
  reducers: {
    addTodo: (state, action) => {
      const newId = crypto.getRandomValues(new Uint16Array(10));
      const newTodo = {
        id: newId.join(""),
        text: action.payload,
        author: "MITANI",
        createday: `${year}/${month}/${date}`,
        updateday: `${year}/${month}/${date}`,
      };

      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const deleteId = Number(Object.keys(action.payload));
      // console.log("deleteId = " + deleteId);
      const newState = JSON.parse(JSON.stringify(state));

      // stateの中のID要素を取り出す
      const findIndexNum = newState.map((obj) => {
        return Number(obj.id);
      });

      // stateのID要素のcheckされたオブジェクト要素のindex番号を変数indexに代入
      let index = findIndexNum.indexOf(deleteId);
      // index番号があったらstateから要素を取り除く
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addTodo, deleteTodo } = store.actions;
export default store.reducer;

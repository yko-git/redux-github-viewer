import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const store = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});
export const { openModal, delecloseModalteTodo } = store.actions;
export default store.reducer;

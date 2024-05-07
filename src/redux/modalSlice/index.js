import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  listTitle: "",
  listText: "",
};
const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.listTitle = action.payload[0];
      state.listText = action.payload[1];
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = modal.actions;
export default modal.reducer;

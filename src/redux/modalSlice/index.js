import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  listId: "",
  listTitle: "",
  listText: "",
  listStatus: "",
  isComplete: false,
};
const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      console.log(action.payload);
      state.isOpen = true;
      state.listId = action.payload[0];
      state.listTitle = action.payload[1];
      state.listText = action.payload[2];
      state.listStatus = action.payload[3];
      if (state.listTitle) {
        state.isComplete = true;
      } else {
        state.isComplete = false;
      }
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = modal.actions;
export default modal.reducer;

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
      state.isOpen = true;
      state.listId = action.payload.listId;
      state.listTitle = action.payload.listTitle;
      state.listText = action.payload.listText;
      state.listStatus = action.payload.listStatus;
      if (state.listTitle) {
        state.isComplete = true;
      } else {
        state.isComplete = false;
      }
      console.log(action.payload);
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = modal.actions;
export default modal.reducer;

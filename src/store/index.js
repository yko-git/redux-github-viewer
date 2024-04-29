import { createStore } from "redux";

const initialState = {
  lists: [
    {
      name: "test1",
      complete: false,
    },
    {
      name: "test2",
      complete: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        lists: [...state.lists, action.payload],
      };

    case "DELETE_LIST":
      return {
        lists: state.lists.filter((list) => list.name !== action.payload),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

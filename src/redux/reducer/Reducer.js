import { createActionsTodo } from "../actions/Action";

const initialstate = {
  items: [],
};

export const reducerTodo = (state = initialstate, action) => {
  switch (action.type) {
    case createActionsTodo.ADD_TODO: {
      return {
        items: [...state.items, { text: action.text, id: action.id }],
      };
    }

    case createActionsTodo.DELETE_TODO: {
        return {
            items: state.items.filter((el) => el.id !== action.id)
        }
    }

    default:
      return state;
  }
};

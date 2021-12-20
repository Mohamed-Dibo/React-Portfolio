const items = JSON.parse(localStorage.getItem("items")) || [];
const initialState = {
  todo: items,
};
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return { ...state, todo: [...state.todo, { ...payload }] };
    case "DELETE_ITEM":
      const updatedItems = state.todo.filter((item) => item.id !== payload);
      return { ...state, todo: updatedItems };

    default:
      return state;
  }
};

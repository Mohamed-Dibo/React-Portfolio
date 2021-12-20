const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      if (state.counter >= 100) {
        return { counter: 100 };
      }
      return { counter: state.counter + 1 };
    case "DECREMENT":
      if (state.counter <= 0) {
        return { counter: 0 };
      }
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

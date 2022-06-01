
export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ADDED":
      const newItem = {
        id: state.length,
        country: action.payload,
      };
      return [...state, newItem];

    case "LIST_DELETED":
      state.splice(action.payload, 1);
      return [...state];

    case "LIST_EDITED":
      const copiedState = [...state];
      copiedState[action.payload.index].list = action.payload.value;
      return copiedState;

    default:
      return state;
  }
};
const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;

    case "SEARCH":
      return action.payload;

    case "NEXT_PAGE":
      return action.payload;

    default:
      return state;
  }
};

export default reducer;

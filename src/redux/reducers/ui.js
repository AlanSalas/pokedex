const initialState = {
  loading: false,
  loadingDetail: false,
  loadingSearch: false,
  searchActive: false,
  openModal: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: action.payload };

    case "FINISH_LOADING":
      return { ...state, loading: action.payload };

    case "START_LOADING_DETAIL":
      return { ...state, loadingDetail: action.payload };

    case "FINISH_LOADING_DETAIL":
      return { ...state, loadingDetail: action.payload };

    case "START_LOADING_SEARCH":
      return { ...state, loadingSearch: action.payload };

    case "FINISH_LOADING_SEARCH":
      return { ...state, loadingSearch: action.payload };

    case "SEARCH_ACTIVE":
      return { ...state, searchActive: action.payload };

    case "SEARCH_INACTIVE":
      return { ...state, searchActive: action.payload };

    case "OPEN_MODAL":
      return { ...state, openModal: action.payload };

    case "CLOSE_MODAL":
      return { ...state, openModal: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "REMOVE_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducer;

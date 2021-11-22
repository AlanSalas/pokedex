export const uiStartLoading = () => {
  return {
    type: "START_LOADING",
    payload: true,
  };
};

export const uiFinishLoading = () => {
  return {
    type: "FINISH_LOADING",
    payload: false,
  };
};

export const uiStartLoadingDetail = () => {
  return {
    type: "START_LOADING_DETAIL",
    payload: true,
  };
};

export const uiFinishLoadingDetail = () => {
  return {
    type: "FINISH_LOADING_DETAIL",
    payload: false,
  };
};

export const uiStartLoadingSearch = () => {
  return {
    type: "START_LOADING_SEARCH",
    payload: true,
  };
};

export const uiFinishLoadingSearch = () => {
  return {
    type: "FINISH_LOADING_SEARCH",
    payload: false,
  };
};

export const searchActive = () => {
  return {
    type: "SEARCH_ACTIVE",
    payload: true,
  };
};

export const searchInactive = () => {
  return {
    type: "SEARCH_INACTIVE",
    payload: false,
  };
};

export const openModal = () => {
  return {
    type: "OPEN_MODAL",
    payload: true,
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
    payload: false,
  };
};

export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};

export const removeError = () => {
  return {
    type: "REMOVE_ERROR",
    payload: false,
  };
};

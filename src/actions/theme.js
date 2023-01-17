export const SET_MODE = "SET_MODE";
export const SET_USER_ID = "SET_USER_ID";

export const setMode = (mode) => (dispatch) => {
  dispatch({
    type: SET_MODE,
    payload: mode,
  });
};

export const setUserId = (id) => (dispatch) => {
  dispatch({
    type: SET_USER_ID,
    payload: id,
  });
};

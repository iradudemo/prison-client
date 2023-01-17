import { SET_MODE, SET_USER_ID } from "actions/theme";
const initialState = {
  mode: "dark",
  userId: "63701cc1f03239c72c000180",
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, mode: action.payload };

    case SET_USER_ID:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};

export default theme;

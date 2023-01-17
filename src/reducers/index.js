import { combineReducers } from "redux";
import user from "./user";
import theme from "./theme";

const rootReducer = combineReducers({
  user,
  theme,
});

export default rootReducer;

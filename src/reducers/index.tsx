import { combineReducers } from "redux";
import loginReducer from "./login.reducer";

export default combineReducers<any>({
  login: loginReducer
});

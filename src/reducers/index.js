import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import users from "./users";
import questions from "./questions";
import loggedInUser from "./loggedInUser";
export default combineReducers({
  loggedInUser,
  questions,
  users,
  loadingBar: loadingBarReducer
});

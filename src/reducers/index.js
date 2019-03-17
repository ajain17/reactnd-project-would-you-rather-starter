import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import users from "./users";
import loggedInUser from "./loggedInUser";
export default combineReducers({
  loggedInUser,
  users,
  loadingBar: loadingBarReducer
});

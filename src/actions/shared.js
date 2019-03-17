import { hideLoading, showLoading } from "react-redux-loading";
import { getUsers } from "../utils/api";
import { getAllUsers } from "./users";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getUsers().then(users => {
      dispatch(getAllUsers(users));
      dispatch(hideLoading());
    });
  };
}

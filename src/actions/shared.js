import { hideLoading, showLoading } from "react-redux-loading";
import { getInitialData } from "../utils/api";
import { getAllUsers } from "./users";
import { getAllQuestions } from "./questions";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(getAllUsers(users));
      dispatch(getAllQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

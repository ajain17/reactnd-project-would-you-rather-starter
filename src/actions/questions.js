import { hideLoading, showLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { updateUsers } from "./users";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

export function getAllQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

function updateQuestion({ authedUser, qid, answer }) {
  return {
    type: UPDATE_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function handleAddQuestion(question) {
  return dispatch => {
    dispatch(showLoading());
    return saveQuestion(question)
      .then(response => {
        dispatch(addQuestion(response));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleSaveAnswer(info) {
  return dispatch => {
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => dispatch(updateQuestion(info)))
      .then(() => dispatch(updateUsers(info)))
      .then(() => dispatch(hideLoading()));
  };
}

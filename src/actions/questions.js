import { getQuestions, saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

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

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState();
    //modify question object here
    dispatch(showLoading());
    return saveQuestion({
      question
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

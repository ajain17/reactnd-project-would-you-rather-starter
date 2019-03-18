import { hideLoading, showLoading } from "react-redux-loading";
import { saveQuestion } from "../utils/api";
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

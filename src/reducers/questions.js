import { GET_QUESTIONS, UPDATE_QUESTION } from "../actions/questions";
const deepcopy = require("deepcopy");
export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      let questions = Object.keys(action.questions).map(
        key => action.questions[key]
      );

      return questions;
    case UPDATE_QUESTION:
      let questionIndex = state.findIndex(q => q.id === action.qid);

      let question = deepcopy(state[questionIndex]);

      if (!question[action.answer].votes.includes(action.authedUser)) {
        question[action.answer].votes.push(action.authedUser);
      }

      let result = [
        ...state.slice(0, questionIndex),
        question,
        ...state.slice(questionIndex + 1)
      ];
      return result;
    default:
      return state;
  }
}

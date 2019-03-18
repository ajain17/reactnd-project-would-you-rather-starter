import { GET_QUESTIONS, UPDATE_QUESTION } from "../actions/questions";
const deepcopy = require("deepcopy");
export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case UPDATE_QUESTION:
      let stateCopy = deepcopy(state);
      let question = stateCopy[action.qid];
      if (!question[action.answer].votes.includes(action.authedUser)) {
        question[action.answer].votes.push(action.authedUser);
      }
      delete stateCopy[action.qid];
      stateCopy[action.qid] = question;

      return {
        ...stateCopy
      };
    default:
      return state;
  }
}

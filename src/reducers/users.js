import { GET_USERS, UPDATE_USERS } from "../actions/users";
const deepcopy = require("deepcopy");
export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      let users = Object.keys(action.users).map(key => action.users[key]);

      return users;
    case UPDATE_USERS:
      let userIndex = state.findIndex(u => u.id === action.authedUser);

      let user = deepcopy(state[userIndex]);

      user.answers[action.qid] = action.answer;

      let result = [
        ...state.slice(0, userIndex),
        user,
        ...state.slice(userIndex + 1)
      ];

      return result;
    default:
      return state;
  }
}

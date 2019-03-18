import { GET_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      let users = Object.keys(action.users).map(key => action.users[key]);

      return users;

    default:
      return state;
  }
}

export const GET_USERS = "GET_USERS";
export const UPDATE_USERS = "UPDATE_USERS";

export function getAllUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function updateUsers({ authedUser, qid, answer }) {
  return {
    type: UPDATE_USERS,
    authedUser,
    qid,
    answer
  };
}

export const GET_USERS = "GET_USERS";

export function getAllUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

import { csrfFetch } from './csrf';

const ALL_USERS = 'session/ALL_USERS';

export const loadAll = users => ({
  type: ALL_USERS,
  users
});

export const getAllUsers = () => async dispatch => {
  const response = await csrfFetch(`/api/users`);
  if (response.ok) {
    const users = await response.json();
    dispatch(loadAll(users));
  }
}

const initialState = {};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USERS:
      const allUsers = {};
      action.users.forEach(user => {
        allUsers[user.id] = user
      })
      return allUsers;
    default:
      return state;
  }
}
import axios from "axios";

// ACTION TYPE
const SET_USER = "SET_USER";
const EDIT_USER = "EDIT_USER";

// ACTION CREATOR
const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

const editUser = (user) => {
  return {
    type: EDIT_USER,
    user,
  };
};

// THUNK CREATOR
export const fetchUser = (username) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.get(`/api/users/${username}`);
      console.log("FETCH USER:", user);
      dispatch(setUser(user));
    } catch (error) {
      return error;
    }
  };
};

export const fetchEditedUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${user.username}`, user);
      dispatch(editUser(data));
    } catch (error) {
      return error;
    }
  };
};

// REDUCER
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case EDIT_USER:
      return action.user;
    default:
      return state;
  }
}

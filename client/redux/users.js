import axios from "axios";

// ACTION TYPE
const SET_USERS = "SET_USERS";

// ACTION CREATOR
const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

// THUNK CREATOR
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/users");
      dispatch(setUsers(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
export default function usersReducer(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
}

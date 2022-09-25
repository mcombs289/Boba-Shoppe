import axios from "axios";

// ACTION TYPE
const SET_ORDERS = "SET_ORDERS";

// ACTION CREATOR
const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    orders,
  };
};

// THUNK CREATOR
export const fetchOrdersByUser = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/user/${userId}`);
      dispatch(setOrders(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// REDUCER
export default function ordersReducer(state = [], action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}

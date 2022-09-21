import axios from "axios";

// ACTION TYPE
const SET_PRODUCT = "SET_PRODUCT";
// const DELETE_PRODUCT = "DELETE_PRODUCT";

// ACTION CREATOR
export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product,
  };
};

// export const removeProduct = (productId) => {
//   return {
//     type: DELETE_PRODUCT,
//     product,
//   };
// };

// THUNK CREATOR
export const fetchProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data: product } = await axios.get(`/api/products/${id}`);
      dispatch(setProduct(product));
    } catch (error) {
      console.log(error);
    }
  };
};

// export const deleteProduct = (productId, history) => {
//   return async (dispatch) => {
//     try {
//       const { data: product } = await axios.delete(
//         `/api/products/${productId}`
//       );
//       dispatch(removeProduct(product));
//       history.push("/products");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// REDUCER
export default function productReducer(state = {}, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    // case DELETE_PRODUCT:
    //   return action.productId;
    default:
      return state;
  }
}

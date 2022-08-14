import { ActionTypes } from "../contants/action-types";

export const SetDetail = (details) => {
  return {
    type: ActionTypes.SET_DETAILS,
    payload: details,
  };
};
export const SetPopularcategory = (popular) => {
  return {
    type: ActionTypes.SET_POPULAR_CATEGORIES,
    payload: popular,
  };
};
export const SetProductfull = (product) => {
  return {
    type: ActionTypes.SET_PRODUCT_FULL,
    payload: product,
  };
};

export const getcart = (cartdetails) => {
  return {
    type: ActionTypes.SET_CART_DETAILS,
    payload: cartdetails,
  };
};

// export const SetToken = (token) => {
//   return {
//     type: ActionTypes.TOKEN_LOGIN,
//     payload: token,
//   };
// };

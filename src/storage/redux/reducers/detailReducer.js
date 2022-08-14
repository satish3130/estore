import { ActionTypes } from "../contants/action-types";

const initialState = {
  details: [],
};

export const detailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DETAILS:
      return { ...state, details: payload };
    default:
      return state;
  }
};
export const Popularcategory = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POPULAR_CATEGORIES:
      return { ...state, popular: payload };
    default:
      return state;
  }
};
export const Productfull = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT_FULL:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const getcart = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART_DETAILS:
      return { ...state, product: payload };
    default:
      return state;
  }
};

// export const Token =(state={},{type,payload})=>{
//   switch (type){
//     case ActionTypes.TOKEN_LOGIN:
//       return{...state,token:payload}
//       default:
//         return state;
//   }
// }

import { combineReducers } from "redux";
import {
  detailReducer,
  getcart,
  Popularcategory,
  Productfull,
} from "./detailReducer";

const reducers = combineReducers({
  allDetails: detailReducer,
  popularcategory: Popularcategory,
  productfull: Productfull,
  getcart: getcart,
});
export default reducers;

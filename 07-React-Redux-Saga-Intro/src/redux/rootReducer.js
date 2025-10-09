import { combineReducers } from "@reduxjs/toolkit";
import counterSlice, { counterFeatureKey } from "./counter/counter.slice.js";
import productSlice, { productFeatureKey } from "./product/product.slice.js";
import shoppingCartSlice, {
  shoppingFeatureKey,
} from "./shopping-cart/shoppingCart.slice.js";

import usersSlice, { userFeatureKey } from "./users/users.slice.js";

const rootReducer = combineReducers({
  [counterFeatureKey]: counterSlice.reducer,
  [productFeatureKey]: productSlice.reducer,
  [shoppingFeatureKey]: shoppingCartSlice.reducer,
  [userFeatureKey]: usersSlice.reducer,
});
export default rootReducer;

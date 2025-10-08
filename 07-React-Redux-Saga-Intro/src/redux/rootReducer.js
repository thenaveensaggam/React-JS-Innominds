import { combineReducers } from "@reduxjs/toolkit";
import counterSlice, { counterFeatureKey } from "./counter/counter.slice.js";

const rootReducer = combineReducers({
  [counterFeatureKey]: counterSlice.reducer,
});
export default rootReducer;

import { createSlice } from "@reduxjs/toolkit";

export const counterFeatureKey = "counterKey";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    incrementAction: (state, action) => {
      state.count = state.count + 1;
    },
    incrementByAction: (state, action) => {
      state.count = state.count + action.payload.value;
    },
    decrementAction: (state, action) => {
      state.count = state.count - 1;
    },
    decrementByAction: (state, action) => {
      state.count = state.count - action.payload.value;
    },
  },
});

export const {
  incrementAction,
  decrementAction,
  incrementByAction,
  decrementByAction,
} = counterSlice.actions;
export default counterSlice;

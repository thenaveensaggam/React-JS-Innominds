import { createSlice } from "@reduxjs/toolkit";

export const userFeatureKey = "usersKey";

const initialState = {
  loading: false,
  users: [],
  errorMessage: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    getAllUsersAction: (state, action) => {
      state.loading = true;
    },
    getAllUsersSuccessAction: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFailureAction: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const userActions = usersSlice.actions;
export default usersSlice;

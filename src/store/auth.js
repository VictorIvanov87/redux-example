import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthednticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state) {
      state.isAuthednticated = true;
    },
    logout(state) {
      state.isAuthednticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

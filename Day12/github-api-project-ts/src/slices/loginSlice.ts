import { createSlice } from "@reduxjs/toolkit";

interface ILoginInitialState {
  isLoggedIn: boolean;
  user: {
    name: string;
    email: string;
  } | null;
}

const initialState = {
  isLoggedIn: false,
  user: null,
} as ILoginInitialState;

/**
 * * Types are always inferred from initial state
 */

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    appLogin(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    appLogout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { appLogin, appLogout } = loginSlice.actions;

export default loginSlice.reducer;

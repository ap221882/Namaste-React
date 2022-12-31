import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  profile?: string;
}
interface ILoginInitialState {
  isLoggedIn: boolean;
  user: IUser | null;
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
    appLogin(state, action: PayloadAction<IUser>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    appLogout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { appLogin, appLogout } = loginSlice.actions;

export default loginSlice.reducer;

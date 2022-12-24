import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "../slices/loginSlice";

const appStore = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default appStore;

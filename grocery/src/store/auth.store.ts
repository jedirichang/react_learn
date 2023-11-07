import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AuthState {
  name: string;
  email: string;
}

const initialState: AuthState = {} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      return action.payload;
    },
    removeAuth: (state: RootState) => {
      return {};
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.value;

export default authSlice.reducer;

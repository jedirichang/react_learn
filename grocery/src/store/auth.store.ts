import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

import { auth } from "../services/firebase";
import { beforeAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useLocalStorageState } from '../hooks/localStorage.hook';
import { FirebaseError } from "firebase/app";

export interface AuthData {
  displayName: string;
  email: string;
  accessToken: string;
}

export interface AuthPayload {
  name: string;
  email: string;
  password: string;
}

export interface AuthState {
  loading: boolean;
  error: any;
  userInfo: AuthData | null
}

const initialState: AuthState = {
  loading: false,
  error: '',
  userInfo: null
}

export const signupUser = createAsyncThunk('signupUser', async (authData: AuthPayload, thunkApi) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, authData.email, authData?.password);

    const serializedUser: AuthData = {
      displayName: res.user.displayName as string,
      email: res.user.email as string,
      accessToken: res.user['stsTokenManager'].accessToken,
    }
    return serializedUser;
  }
  catch (e: FirebaseError) {
    if (e.code === 'auth/email-already-in-use') {
      thunkApi.rejectWithValue({ error: 'Email already in use!' });
    }
    return thunkApi.rejectWithValue({ error: e });
  }
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      const userInfo: AuthData = {
        displayName: action.payload.displayName,
        accessToken: action.payload.accessToken,
        email: action.payload.email
      }
      state.userInfo = userInfo;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = '';
    })
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export default authSlice.reducer;

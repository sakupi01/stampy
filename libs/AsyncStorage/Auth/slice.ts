import { User } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export async function setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === "web") {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error("Local storage is unavailable:", e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
};

const INITIAL_AUTH_STATE: AuthState = {
  user: null,
  token: null,
  isLoading: false,
};
export const { actions, reducer } = createSlice({
  name: "auth",
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    authorize: (
      state,
      action: PayloadAction<{ token: string; user: User }>,
    ) => {
      setStorageItemAsync("token", action.payload.token);
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      setStorageItemAsync("token", action.payload.token);
      state.token = action.payload.token;
    },
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
    unAuthorize: (state) => {
      setStorageItemAsync("token", null);
      state.token = null;
      state.user = null;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export { actions as authActions, reducer as authReducer };

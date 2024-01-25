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
  session: string | null;
  isLoading: boolean;
};

const INITIAL_AUTH_STATE: AuthState = {
  session: null,
  isLoading: false,
};
export const { actions, reducer } = createSlice({
  name: "auth",
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      setStorageItemAsync("session", action.payload);
      state.session = action.payload;
    },
    signOut: (state) => {
      setStorageItemAsync("session", null);
      state.session = null;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export { actions as authActions, reducer as authReducer };

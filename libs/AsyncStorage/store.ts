import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { authReducer } from "./Auth/slice";
import { listReducer } from "./List/slice";
import { wordReducer } from "./Word/slice";
export const store = configureStore({
  reducer: {
    word: wordReducer,
    auth: authReducer,
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

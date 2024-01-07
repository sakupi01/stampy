import { createSlice } from "@reduxjs/toolkit";
import { WORD_DICTIONARY } from "./data";

export const { actions, reducer } = createSlice({
  name: "word",
  initialState: WORD_DICTIONARY,
  reducers: {},
});

export { actions as wordActions, reducer as wordReducer };

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { WordDictionaryKeys } from "./data";

export const selectWordByKey = createSelector(
  [
    (state: RootState) => state.word,
    (state: RootState, key: WordDictionaryKeys) => key,
  ],
  (word, key) => {
    return word[key];
  },
);

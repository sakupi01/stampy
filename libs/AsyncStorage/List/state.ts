import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getListState = createSelector(
  (state: RootState) => state.list,
  (list) => list,
);

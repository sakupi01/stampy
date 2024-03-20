import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ListState = {
  notifications: Notification[] | null;
  letters: Letter[] | null;
};

const INITIAL_LIST_STATE: ListState = {
  notifications: null,
  letters: null,
};
export const { actions, reducer } = createSlice({
  name: "list",
  initialState: INITIAL_LIST_STATE,
  reducers: {
    setNotifications: (
      state,
      action: PayloadAction<{ notifications: Notification[] }>,
    ) => {
      state.notifications = action.payload.notifications;
    },
    setLetters: (state, action: PayloadAction<{ letters: Letter[] }>) => {
      state.letters = action.payload.letters;
    },
  },
});

export { actions as listActions, reducer as listReducer };

import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { StampCard } from "@/types/StampCard";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ListState = {
  stampCards: StampCard[] | null;
  notifications: Notification[] | null;
  letters: Letter[] | null;
};

const INITIAL_LIST_STATE: ListState = {
  stampCards: null,
  notifications: null,
  letters: null,
};
export const { actions, reducer } = createSlice({
  name: "list",
  initialState: INITIAL_LIST_STATE,
  reducers: {
    setStampCards: (
      state,
      action: PayloadAction<{ stampCards: StampCard[] }>,
    ) => {
      state.stampCards = action.payload.stampCards;
    },
    addStampCard: (state, action: PayloadAction<{ stampCard: StampCard }>) => {
      state.stampCards?.push(action.payload.stampCard);
    },
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

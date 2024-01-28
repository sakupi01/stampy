import { createContext } from "react";

export type DialogContextType = {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

export const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  openDialog: () => {},
  closeDialog: () => {},
});

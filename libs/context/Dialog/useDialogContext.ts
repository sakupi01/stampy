import { useContext } from "react";
import { DialogContext } from "./context";

export const useDialogContext = () => {
  const { isOpen, openDialog, closeDialog } = useContext(DialogContext);
  return { isOpen, openDialog, closeDialog };
};

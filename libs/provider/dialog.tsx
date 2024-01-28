import { ReactNode, useState } from "react";
import { DialogContext } from "../context/Dialog/context";

export default function DialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider
      value={{
        isOpen,
        openDialog: () => setIsOpen(true),
        closeDialog: () => setIsOpen(false),
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

"use client";

import { useReducer, ReactNode } from "react";
import { OpenElementsContext, openElementsReducer } from "./OpenElementsContext";

type Props = {
  children: ReactNode;
};

export const OpenElementsContextProvider = ({ children }: Props) => {
  const [openElements, dispatch] = useReducer(openElementsReducer, []);

  return (
    <OpenElementsContext.Provider value={[openElements, dispatch]}>
      {children}
    </OpenElementsContext.Provider>
  );
};

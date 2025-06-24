"use client";

import { createContext, Dispatch } from "react";
import { OpenElementsAction, OpenElementsState } from "./types";

export const OpenElementsContext = createContext<[OpenElementsState, Dispatch<OpenElementsAction>] | null>(null);

export const openElementsReducer = (openElements: OpenElementsState, action: OpenElementsAction): OpenElementsState => {
  let newState: OpenElementsState;

  switch (action.type) {
    case "addElement": {
      if (openElements.some((el) => el.elementID === action.element.elementID)) {
        newState = openElements;
      } else {
        newState = [...openElements, action.element];
      }
      break;
    }
    case "removeElement": {
      if (openElements.length > 1) {
        newState = openElements.filter(
          (el) =>
            el.elementID !== action.element.elementID || el.elementType !== action.element.elementType
        );
      } else newState = openElements;
      break;
    }
    case "updateElement": {
      newState = openElements.map((el) =>
        el.elementID === action.element.elementID ? action.element : el
      );
      break;
    }
    case "reorder": {
      const result = Array.from(openElements);
      const [removed] = result.splice(action.startIndex, 1);
      result.splice(action.endIndex, 0, removed);
      newState = result;
      break;
    }
    case "setState": {
      newState = action.state;
      break;
    }
  }

  return newState;
};
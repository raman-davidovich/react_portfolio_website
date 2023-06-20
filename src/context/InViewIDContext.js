import { createContext } from "react";

export const InViewIDContext = createContext({
  inViewSectionID: "",
  changeInViewID: () => {},
});

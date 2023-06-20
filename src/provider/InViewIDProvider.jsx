import { useState } from "react";
import { InViewIDContext } from "../context/InViewIDContext";

export const InViewIDProvider = ({ children }) => {
  const [inViewId, setInViewId] = useState("#");

  function changeInView(idInView) {
    setInViewId(idInView);
  }

  return (
    <InViewIDContext.Provider
      value={{
        inViewSectionID: inViewId,
        changeInViewID: changeInView,
      }}
    >
      {children}
    </InViewIDContext.Provider>
  );
};

import React, { useEffect } from "react";
import "./progressBar.scss";
import { onScroll } from "./utils";

const ProgressBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="progress_wrapper">
      <div className="progress_bar"></div>
    </div>
  );
};

export default ProgressBar;

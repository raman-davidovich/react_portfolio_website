import React from "react";
import "./sectionTitle.scss";

const SectionTitle = ({ children }) => {
  return <h2 className="sectionTitle__title">{children}</h2>;
};

export default SectionTitle;

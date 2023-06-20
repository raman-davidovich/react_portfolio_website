import React from "react";
import "./formError.scss";

const FormError = ({ children }) => {
  return <div className="error__text">{children}</div>;
};

export default FormError;

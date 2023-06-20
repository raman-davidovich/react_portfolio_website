import React from "react";
import classNames from "classnames";
import "./button.scss";

function Button({ children, primary, tag = "button", ...rest }) {
  const TagName = tag;

  return (
    <TagName
      {...rest}
      className={classNames("btn", {
        "btn-primary": primary,
      })}
    >
      {children}
    </TagName>
  );
}

export default Button;

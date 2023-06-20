import React from "react";
import "./list.scss";
import { BiCheck } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

function List({ list }) {
  return (
    <ul className="list">
      <Fade delay={2000} direction="up" triggerOnce cascade damping={0.3}>
        {list.map((item) => {
          return (
            <li key={item}>
              <BiCheck className="list-icon" alt="Styled list item marker" />
              <p>{item}</p>
            </li>
          );
        })}
      </Fade>
    </ul>
  );
}

export default List;

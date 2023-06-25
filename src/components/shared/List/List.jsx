import React from "react";
import "./list.scss";
import { BiCheck } from "react-icons/bi";
import Reveal from "../Reveal/Reveal";

function List({ list }) {
  return (
    <ul className="list">
      {list.map((item) => {
        return (
          <Reveal key={item}>
            <li>
              <BiCheck className="list-icon" alt="Styled list item marker" />
              <p>{item}</p>
            </li>
          </Reveal>
        );
      })}
    </ul>
  );
}

export default List;

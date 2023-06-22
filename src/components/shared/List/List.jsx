import React from "react";
import "./list.scss";
import { BiCheck } from "react-icons/bi";

function List({ list }) {
  return (
    <ul className="list">
      {list.map((item) => {
        return (
          <li key={item}>
            <BiCheck className="list-icon" alt="Styled list item marker" />
            <p>{item}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default List;

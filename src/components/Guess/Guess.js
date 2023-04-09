import React from "react";
import { range } from "../../utils";

function Guess({ children }) {
  let letters;

  if (!children) {
    letters = range(5).map((i) => <span key={i} className="cell"></span>);
  } else {
    letters = children.map((item, i) => (
      <span key={i} className={`cell ${item.status}`}>
        {item.letter}
      </span>
    ));
  }

  return <div className="guess">{letters}</div>;
}

export default Guess;

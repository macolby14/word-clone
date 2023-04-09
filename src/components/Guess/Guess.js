import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const cls = status ? `cell ${status}` : "cell";
  return <span className={cls}>{letter}</span>;
}

function Guess({ children }) {
  return (
    <div className="guess">
      {range(5).map((i) => (
        <Cell
          key={i}
          letter={children ? children[i].letter : undefined}
          status={children ? children[i].status : undefined}
        />
      ))}
    </div>
  );
}

export default Guess;

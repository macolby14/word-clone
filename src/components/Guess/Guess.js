import React from "react";

function Guess({ setGuess }) {
  const [input, setInput] = React.useState("");
  console.log({ input });

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setGuess(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        style={{ textTransform: "uppercase" }}
        pattern=".{5,}"
        id="guess-input"
        type="text"
        input={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Guess;

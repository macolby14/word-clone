import React from "react";

function GuessInput({ submitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        submitGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        // style={{ textTransform: "uppercase" }}
        disabled={gameStatus !== "playing"}
        pattern="[a-zA-Z]{5,5}"
        title="5 letter"
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

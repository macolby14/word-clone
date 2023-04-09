import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import ResultBanner from "../ResultBanner/ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("playing");

  function addGuess(guess) {
    const newGuess = checkGuess(guess, answer);
    const newGuesses = [...guesses, checkGuess(guess, answer)];
    setGuesses(newGuesses);
    if (newGuess.every((cell) => cell.status === "correct")) {
      setStatus("win");
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lose");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput submitGuess={addGuess} gameStatus={status} />
      <ResultBanner
        status={status}
        answer={answer}
        numGuesses={guesses.length}
      />
    </>
  );
}

export default Game;

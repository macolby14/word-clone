import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  const guessSpots = range(NUM_OF_GUESSES_ALLOWED).map((i) => (
    <Guess key={i}>{i < guesses.length ? guesses[i] : null}</Guess>
  ));

  return <div className="guess-results">{guessSpots}</div>;
}

export default GuessResults;

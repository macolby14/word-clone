import React from "react";

function ResultBanner({ status, numGuesses, answer }) {
  if (status === "win") {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else if (status === "lose") {
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default ResultBanner;

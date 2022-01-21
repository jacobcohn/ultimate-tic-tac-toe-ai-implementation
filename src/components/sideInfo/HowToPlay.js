import React from "react";
import "../../styles/HowToPlay.css";

const HowToPlay = () => {
  const getLink = () => {
    return (
      <a
        className="howToPlayLink"
        href="https://mathwithbaddrawings.com/2013/06/16/ultimate-tic-tac-toe/"
        target="_blank"
        rel="noreferrer"
      > click here</a>
    );
  };

  return (
    <div>
      <p className="howToPlay">Please {getLink()} to learn about how to play and the specific rules</p>
    </div>
  );
};

export default HowToPlay;

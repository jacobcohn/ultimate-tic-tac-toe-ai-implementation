import React from "react";

const HowToPlay = () => {
  const getLink = () => {
    return (
      <a
        href="https://mathwithbaddrawings.com/2013/06/16/ultimate-tic-tac-toe/"
        target="_blank"
        rel="noreferrer"
      >here</a>
    );
  };

  return (
    <div>
      <p>To learn about how to play and the specific rules, please click {getLink()}</p>
    </div>
  );
};

export default HowToPlay;

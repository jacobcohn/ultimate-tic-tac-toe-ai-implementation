import React from "react";
import GameStatus from "./GameStatus";
import NewGameBtn from "./NewGameBtn";
import HowToPlay from "./HowToPlay";

const Description = ({ handleNewGame, winner, currentPlayer }) => {
  return (
    <div>
      <GameStatus winner={winner} currentPlayer={currentPlayer}/>
      <NewGameBtn onClick={handleNewGame}/>
      <HowToPlay/>
    </div>
  );
};

export default Description;

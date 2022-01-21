import React from "react";
import GameStatus from "./GameStatus";
import NewGameBtn from "./NewGameBtn";
import HowToPlay from "./HowToPlay";
import "../../styles/Description.css";

const Description = ({ handleNewGame, winner, currentPlayer }) => {
  return (
    <div className="description">
      <GameStatus winner={winner} currentPlayer={currentPlayer}/>
      <HowToPlay/>
      <NewGameBtn onClick={handleNewGame}/>
    </div>
  );
};

export default Description;

import React from "react";
import "../../styles/GameStatus.css";

const GameStatus = ({ winner, currentPlayer }) => {
  const displayWinner = () => {
    if (winner === " ") return `Cats Game`;
    return `Player ${winner} Has Won!`
  };

  const displayCurrentPlayer = () => {
    return `Player ${currentPlayer}'s Turn`;
  };

  const displayGameStatus = () => {
    if (winner !== "") return displayWinner();
    return displayCurrentPlayer();
  };

  return (
    <h1 className="gameStatus">{displayGameStatus()}</h1>
  );
};

export default GameStatus;

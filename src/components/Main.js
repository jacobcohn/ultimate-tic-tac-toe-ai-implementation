import React, { useState } from "react";
import BigBoard from "./game/BigBoard"
import Description from "./sideInfo/Description";
import useToggle from "./hooks/useToggle";
import useLastMove from "./hooks/useLastMove";
import useSmallBoardData from "./hooks/useSmallBoardData";
import useBigBoardData from "./hooks/useBigBoardData";
import useWinner from "./hooks/useWinner";
import useValidBigBoardPosition from "./hooks/useValidBigBoardPosition";
import useComputer from "./hooks/useComputer";
import "../styles/Main.css";

const Main = () => {
  const [isComputerTurn, setIsComputerTurn] = useState(false);
  const [currentPlayer, updateCurrentPlayer, resetCurrentPlayer] = useToggle("X", "O");
  const [lastMove, updateLastMove, resetLastMove] = useLastMove();
  const [smallBoardData, updateSmallBoardData, resetSmallBoardData] = useSmallBoardData(currentPlayer);
  const bigBoardData = useBigBoardData(lastMove, smallBoardData);
  const winner = useWinner(bigBoardData);
  const validBigBoardData = useValidBigBoardPosition(bigBoardData, lastMove.smallBoardPosition, winner);
  
  const handleMove = (bigBoardPosition, smallBoardPosition, isPlayer) => {
    console.log(bigBoardPosition)
    
    if (winner !== "") return;
    if (!validBigBoardData[bigBoardPosition]) return;
    if (isPlayer & currentPlayer === "X") {
      makeMove(bigBoardPosition, smallBoardPosition);
      setIsComputerTurn(true);
    } else if (!isPlayer & currentPlayer === "O") {
      setIsComputerTurn(false);
      makeMove(bigBoardPosition, smallBoardPosition);
    }
  };

  useComputer(isComputerTurn, currentPlayer, validBigBoardData, smallBoardData, handleMove)

  const makeMove = (bigBoardPosition, smallBoardPosition) => {
    updateLastMove(bigBoardPosition, smallBoardPosition);
    updateSmallBoardData(bigBoardPosition, smallBoardPosition);
    updateCurrentPlayer();
  };

  const handleNewGame = () => {
    resetLastMove();
    resetSmallBoardData();
    resetCurrentPlayer();
  };

  return (
    <div className="main">
      <BigBoard 
        onClick={handleMove}
        lastMove={lastMove}
        smallBoardData={smallBoardData}
        bigBoardData={bigBoardData}
        validBigBoardData={validBigBoardData}
      />
      <Description 
        handleNewGame={handleNewGame}
        winner={winner}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}

export default Main;

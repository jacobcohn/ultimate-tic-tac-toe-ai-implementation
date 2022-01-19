import React from "react";
import BigBoard from "./game/BigBoard"
import useToggle from "./hooks/useToggle";
import useLastMove from "./hooks/useLastMove";
import useSmallBoardData from "./hooks/useSmallBoardData";
import useBigBoardData from "./hooks/useBigBoardData";
import useWinner from "./hooks/useWinner";
import useValidBigBoardPosition from "./hooks/useValidBigBoardPosition";
import "../styles/Main.css";

const Main = () => {
  const [currentPlayer, updateCurrentPlayer, resetCurrentPlayer] = useToggle("X", "O");
  const [lastMove, updateLastMove, resetLastMove] = useLastMove();
  const [smallBoardData, updateSmallBoardData, resetSmallBoardData] = useSmallBoardData(currentPlayer);
  const bigBoardData = useBigBoardData(lastMove, smallBoardData);
  const winner = useWinner(bigBoardData);
  const validBigBoardData = useValidBigBoardPosition(bigBoardData, lastMove.smallBoardPosition, winner);

  const handleMove = (bigBoardPosition, smallBoardPosition) => {
    if (winner !== "") return;
    if (!validBigBoardData[bigBoardPosition]) return;
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
      <button onClick={handleNewGame}>New Game</button>
    </div>
  );
}

export default Main;

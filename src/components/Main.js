import React from "react";
import BigBoard from "./game/BigBoard"
import isValidBigBoardBox from "./utils/isValidBigBoardBox";
import useCurrentPlayer from "./hooks/useCurrentPlayer";
import useSmallBoardData from "./hooks/useSmallBoardData";
import useBigBoardData from "./hooks/useBigBoardData";
import useWinner from "./hooks/useWinner";
import "../styles/Main.css";

const Main = () => {
  const [currentPlayer, updateCurrentPlayer] = useCurrentPlayer("X");
  const [lastMove, smallBoardData, updateSmallBoardData] = useSmallBoardData(currentPlayer);
  const bigBoardData = useBigBoardData(lastMove, smallBoardData);
  const winner = useWinner(bigBoardData);

  const updateGame = (bigBoardPosition, smallBoardPosition) => {
    updateSmallBoardData(bigBoardPosition, smallBoardPosition);
    updateCurrentPlayer();
  };

  const handleNewMove = (bigBoardPosition, smallBoardPosition) => {
    if (!isValidBigBoardBox(bigBoardData, lastMove.smallBoardPosition, bigBoardPosition)) return;
    updateGame(bigBoardPosition, smallBoardPosition);
  };

  return (
    <div className="main">
      <BigBoard 
        onClick={handleNewMove}
        bigBoardData={bigBoardData}
        smallBoardData={smallBoardData}
        currentBoard={lastMove.smallBoardPosition}
        lastMove={lastMove}
      ></BigBoard>
    </div>
  );
}

export default Main;

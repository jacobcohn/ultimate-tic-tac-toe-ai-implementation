import React, { useEffect } from "react";
import BigBoard from "./game/BigBoard"
import isValidBigBoardPosition from "./utils/isValidBigBoardPosition";
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

  useEffect(() => {
    // some code for when a winner is decided
  }, [winner]);

  const handleNewMove = (bigBoardPosition, smallBoardPosition) => {
    if (!isValidBigBoardPosition(bigBoardData, lastMove.smallBoardPosition, bigBoardPosition)) return;
    updateSmallBoardData(bigBoardPosition, smallBoardPosition);
    updateCurrentPlayer();
  };

  return (
    <div className="main">
      <BigBoard 
        onClick={handleNewMove}
        bigBoardData={bigBoardData}
        smallBoardData={smallBoardData}
        lastMove={lastMove}
      />
    </div>
  );
}

export default Main;

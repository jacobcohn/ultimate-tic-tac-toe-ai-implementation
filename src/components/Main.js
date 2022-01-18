import React, { useEffect } from "react";
import BigBoard from "./game/BigBoard"
import useToggle from "./hooks/useToggle";
import useLastMove from "./hooks/useLastMove";
import useSmallBoardData from "./hooks/useSmallBoardData";
import useBigBoardData from "./hooks/useBigBoardData";
import useWinner from "./hooks/useWinner";
import useValidBigBoardPosition from "./hooks/useValidBigBoardPosition";
import "../styles/Main.css";

const Main = () => {
  const [currentPlayer, updateCurrentPlayer] = useToggle("X", "O");
  const [lastMove, updateLastMove] = useLastMove();
  const [smallBoardData, updateSmallBoardData] = useSmallBoardData(currentPlayer);
  const bigBoardData = useBigBoardData(lastMove, smallBoardData);
  const winner = useWinner(bigBoardData);
  const validBigBoardData = useValidBigBoardPosition(bigBoardData, lastMove.smallBoardPosition);

  useEffect(() => {
    // some code for when a winner is decided
  }, [winner]);

  const handleNewMove = (bigBoardPosition, smallBoardPosition) => {
    if (!validBigBoardData[bigBoardPosition]) return;
    updateLastMove(bigBoardPosition, smallBoardPosition);
    updateSmallBoardData(bigBoardPosition, smallBoardPosition);
    updateCurrentPlayer();
  };

  return (
    <div className="main">
      <BigBoard 
        onClick={handleNewMove}
        lastMove={lastMove}
        smallBoardData={smallBoardData}
        bigBoardData={bigBoardData}
        validBigBoardData={validBigBoardData}
      />
    </div>
  );
}

export default Main;

import React, { useState } from "react";
import BigBoard from "./game/BigBoard"
import emptyGame from "./utils/emptyGame";
import isValidBigBoardBox from "./utils/isValidBigBoardBox";
import getTicTacToeStatus from "./utils/getTicTacToeStatus";
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

  const [game, setGame] = useState(emptyGame);

  const updateGame = (bigBoardPosition, smallBoardPosition) => {
    setGame((prevState) => ({
      player: (prevState.player === "X") ? "O" : "X",
      currentBoard: smallBoardPosition,
      lastMove: {
        bigBoardPosition,
        smallBoardPosition,
      },
      board: {
        ...prevState.board,
        [bigBoardPosition]: {
          ...prevState.board[bigBoardPosition],
          [smallBoardPosition]: prevState.player,
          winner: getTicTacToeStatus({
            ...prevState.board[bigBoardPosition],
            [smallBoardPosition]: prevState.player,
          }),
        },
      },
    }));

    updateSmallBoardData(bigBoardPosition, smallBoardPosition);
    updateCurrentPlayer();
  };

  const handleNewMove = (bigBoardPosition, smallBoardPosition) => {
    if (!isValidBigBoardBox(game.board, game.currentBoard, bigBoardPosition)) return;
    updateGame(bigBoardPosition, smallBoardPosition);
  };

  return (
    <div className="main">
      <BigBoard 
        onClick={handleNewMove}
        board={game.board}
        currentBoard={game.currentBoard}
        lastMove={game.lastMove}
      ></BigBoard>
    </div>
  );
}

export default Main;

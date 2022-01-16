import React, { useState } from "react";
import BigBoard from "./game/BigBoard"
import emptyGame from "./utils/emptyGame";
import "../styles/Main.css";

const Main = () => {
  const [game, setGame] = useState(emptyGame);

  const handleNewMove = (bigBoardPosition, smallBoardPosition) => {
    if (bigBoardPosition !== game.currentBoard && game.currentBoard !== null) return;

    setGame((prevState) => ({
      turn: (prevState.turn === "X") ? "O" : "X",
      currentBoard: smallBoardPosition,
      lastMove: {
        bigBoardPosition,
        smallBoardPosition,
      },
      board: {
        ...prevState.board,
        [bigBoardPosition]: {
          ...prevState.board[bigBoardPosition],
          [smallBoardPosition]: prevState.turn,
        },
      },
    }))
  };

  return (
    <div className="main">
      <BigBoard 
        onClick={handleNewMove}
        board={game.board}
        lastMove={game.lastMove}
      ></BigBoard>
    </div>
  );
}

export default Main;

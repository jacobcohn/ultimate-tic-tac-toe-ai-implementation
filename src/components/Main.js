import React, { useState } from "react";
import BigBoard from "./game/BigBoard"
import emptyGame from "./utils/emptyGame";
import "../styles/Main.css";

const Main = () => {
  const [game, setGame] = useState(emptyGame);

  const handleNewMove = (bigBoardPosition, smallBoardPosition) => {
    setGame((prevState) => ({
      ...prevState,
      board: {
        ...prevState.board,
        [bigBoardPosition]: {
          ...prevState.board[bigBoardPosition],
          [smallBoardPosition]: "X",
        },
      },
    }))
  };

  return (
    <div className="main">
      <BigBoard 
        onClick={handleNewMove}
        board={game.board}
      ></BigBoard>
    </div>
  );
}

export default Main;

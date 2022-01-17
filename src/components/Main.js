import React, { useState } from "react";
import BigBoard from "./game/BigBoard"
import emptyGame from "./utils/emptyGame";
import isValidBigBoardBox from "./utils/isValidBigBoardBox";
import getTicTacToeStatus from "./utils/getTicTacToeStatus";
import "../styles/Main.css";

const Main = () => {
  // const [currentPlayer, setCurrentPlayer] = useState("X");
  // const [lastMove, setLastMove] = useState({
  //   bigBoardPosition: null,
  //   smallBoardPosition: null,
  // });
  // const [smallBoards, setSmallBoards] = useState(emptyGame.board);
  // const [bigBoard, setBigBoard] = useState(emptyGame.board[0]);
  // const [winner, setWinner] = useState("");

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

    // updateCurrentPlayer();
    // updateLastMove();
    // updateSmallBoards();
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

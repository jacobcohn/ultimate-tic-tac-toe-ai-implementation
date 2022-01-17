import React from "react";
import SmallBoard from "./SmallBoard";
import isValidBigBoardBox from "../utils/isValidBigBoardBox";
import "../../styles/BigBoard.css";

const BigBoard = ({ onClick, bigBoardData, smallBoardData, currentBoard, lastMove }) => {
  const getTicTacToeElement = (position) => {
    return (
      <div className="white" key={position}>
        <div 
          className={`
            bigTile 
            ${(isValidBigBoardBox(bigBoardData, currentBoard, position)) ? "green" : "" }
          `} 
          key={position}
        >
          <SmallBoard 
            key={position}
            onClick={onClick}
            board={smallBoardData[position]} 
            boardNumber={position}
            lastMove={lastMove}
          ></SmallBoard>
        </div>
      </div>
    );
  };

  const getMoveElement = (position) => {
    return (
      <div className="white" key={position}>
        <div className="bigTile" key={position}>
          <h1 key={position}>{bigBoardData[position]}</h1>
        </div>
      </div>
    );
  };

  const getElement = (position) => {
    if (bigBoardData[position] === "") return getTicTacToeElement(position);
    return getMoveElement(position);
  };

  const getSquares = () => {
    const squares = [];

    for (let i = 0; i < 9; i += 1) {
      squares.push(getElement(i));
    }

    return squares;
  };

  return (
    <div className="bigBoard">
      {getSquares()}
    </div>
  );
}

export default BigBoard;

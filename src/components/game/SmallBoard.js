import React from "react";
import isValidBigBoardPosition from "../utils/isValidBigBoardPosition";
import "../../styles/SmallBoard.css";

const SmallBoard = ({ onClick, bigBoardData, board, boardNumber, lastMove}) => {
  const isHighlighted = (position) => isValidBigBoardPosition(bigBoardData, lastMove.smallBoardPosition, position);

  const getMoveElement = (position) => {
    return (
      <div className="white" key={position}>
        <div 
          className={`
            smallTile 
            ${(lastMove.bigBoardPosition === boardNumber && lastMove.smallBoardPosition === position) ? "red" : "" }
          `} 
          key={position}
        >
          <h1>{board[position]}</h1>
        </div>
      </div>
    );
  };

  const getBlankElement = (position) => {
    return (
      <div 
        className={`smallTile ${isHighlighted(boardNumber) ? "highlighted" : ""}`}
        key={position} 
        onClick={() => onClick(boardNumber, position)}
      ></div>
    );
  };
  
  const getElement = (position) => {
    if (board[position] !== "") return getMoveElement(position);
    return getBlankElement(position);
  }; 
  
  const getSquares = () => {
    const squares = [];

    for (let i = 0; i < 9; i += 1) {
      squares.push(getElement(i));
    }

    return squares;
  };

  return (
    <div className="smallBoard">
      {getSquares()}
    </div>
  );
}

export default SmallBoard;
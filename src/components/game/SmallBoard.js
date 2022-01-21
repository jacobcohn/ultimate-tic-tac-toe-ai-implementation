import React from "react";
import "../../styles/SmallBoard.css";

const SmallBoard = ({ onClick, board, boardNumber, lastMove, isValidBigBoardPosition, isVisible = true }) => {
  const getMoveElement = (position) => {
    const getClassName = (position) =>  `smallTile ${(lastMove.bigBoardPosition === boardNumber && lastMove.smallBoardPosition === position) ? "red" : "" }`;

    return (
      <div className="white" key={position}>
        <div className={getClassName(position)} key={position}>
          <h1 className="smallMove" key={position}>{board[position]}</h1>
        </div>
      </div>
    );
  };

  const getBlankElement = (position) => {
    return (
      <div 
        className={`smallTile ${isValidBigBoardPosition ? "highlighted" : ""}`}
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
    <div className={`smallBoard ${(isVisible) ? "" : "hidden"}`}>
      {getSquares()}
    </div>
  );
}

export default SmallBoard;
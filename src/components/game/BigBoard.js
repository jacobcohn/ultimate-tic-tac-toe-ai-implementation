import React from "react";
import SmallBoard from "./SmallBoard";
import "../../styles/BigBoard.css";

const BigBoard = ({ onClick, board }) => {
  const getElement = (position) => {
    return (
      <div className="bigTile" key={position}>
        <SmallBoard 
          key={position}
          onClick={onClick}
          board={board[position]} 
          boardNumber={position}
        ></SmallBoard>
      </div>
    );
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

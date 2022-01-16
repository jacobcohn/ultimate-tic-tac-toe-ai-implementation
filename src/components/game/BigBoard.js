import React from "react";
import SmallBoard from "./SmallBoard";
import "../../styles/BigBoard.css";

const BigBoard = ({ size }) => {
  const getElement = (i) => {
    return (
      <div className="bigTile">
        <SmallBoard key={i}></SmallBoard>
      </div>
    );
  };

  const getSquares = () => {
    const squares = [];

    for (let i = 0; i < 9; i += 1) {
      squares.push(getElement(i));
      // put a white div on before small board
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

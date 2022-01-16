import React from "react";
import "../../styles/SmallBoard.css";

const SmallBoard = () => {
  const getSquares = () => {
    const squares = [];

    for (let i = 0; i < 9; i += 1) {
      squares.push(<div className="smallTile" key={i}></div>);
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
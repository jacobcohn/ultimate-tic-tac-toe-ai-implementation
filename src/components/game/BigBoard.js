import React from "react";
import SmallBoard from "./SmallBoard";
import isValidBigBoardPosition from "../utils/isValidBigBoardPosition";
import "../../styles/BigBoard.css";

const BigBoard = ({ onClick, bigBoardData, smallBoardData, lastMove }) => {
  const isHighlighted = (position) => isValidBigBoardPosition(bigBoardData, lastMove.smallBoardPosition, position);

  const getSmallBoard = (position) => {
    return (
      <SmallBoard 
        key={position}
        onClick={onClick}
        bigBoardData={bigBoardData}
        board={smallBoardData[position]} 
        boardNumber={position}
        lastMove={lastMove}
      />
    );
  };

  const getTicTacToeElement = (position) => {
    const getClassName = (position) => `bigTile ${(isHighlighted(position)) ? "green" : "" }`;

    return (
      <div className="white" key={position}>
        <div className={getClassName(position)} key={position}>
          {getSmallBoard(position)}
        </div>
      </div>
    );
  };

  const getMoveElement = (position) => {
    return (
      <div className="white" key={position}>
        <div className="bigTile" key={position}>
          <h1 className="" key={position}>{bigBoardData[position]}</h1>
        </div>
      </div>
    );
  };

  const getOneElement = (position) => {
    if (bigBoardData[position] === "") return getTicTacToeElement(position);
    return getMoveElement(position);
  };

  const getAllElements = () => {
    const elements = [];

    for (let position = 0; position < 9; position += 1) {
      elements.push(getOneElement(position));
    }

    return elements;
  };

  return (
    <div className="bigBoard">
      {getAllElements()}
    </div>
  );
}

export default BigBoard;

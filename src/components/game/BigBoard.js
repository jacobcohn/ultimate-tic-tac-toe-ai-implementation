import React from "react";
import SmallBoard from "./SmallBoard";
import HoverTile from "./HoverTile";
import "../../styles/BigBoard.css";

const BigBoard = ({ onClick, lastMove, smallBoardData, bigBoardData, isHighlighted }) => {
  const getSmallBoard = (position) => {
    return (
      <SmallBoard 
        key={position}
        onClick={onClick}
        board={smallBoardData[position]} 
        boardNumber={position}
        lastMove={lastMove}
        isHighlighted={isHighlighted}
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

  const getHoverTile = (position) => {
    return (
      <HoverTile
        key={position}
        onClick={onClick}
        smallBoard={smallBoardData[position]} 
        boardNumber={position}
        lastMove={lastMove}
        isHighlighted={isHighlighted}
        bigBoardStatus={bigBoardData[position]}
      />
    );
  };

  const getHoverElement = (position) => {
    return (
      <div className="white" key={position}>
        <div className="bigTile" key={position}>
          {getHoverTile(position)}
        </div>
      </div>
    );
  };

  const getOneElement = (position) => {
    if (bigBoardData[position] === "") return getTicTacToeElement(position);
    return getHoverElement(position);
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

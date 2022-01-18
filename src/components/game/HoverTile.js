import React, { useState } from "react";
import SmallBoard from "./SmallBoard";
import "../../styles/HoverTile.css";

const HoverTile = ({ onClick, smallBoard, boardNumber, lastMove, isHighlighted, bigBoardStatus }) => {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  const getSmallBoard = () => {
    return (
      <SmallBoard 
        key={boardNumber}
        onClick={onClick}
        board={smallBoard} 
        boardNumber={boardNumber}
        lastMove={lastMove}
        isHighlighted={isHighlighted}
      />
    );
  };

  const getMoveElement = () => {
    return <h1 className={`move ${isHovering ? "hovering" : "" }`}>{bigBoardStatus}</h1>
  };

  return (
    <div className="hoverTile" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {getMoveElement()}
      {isHovering ? getSmallBoard() : ""}
    </div>
  );
};

export default HoverTile

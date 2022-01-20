import React, { useState } from "react";
import SmallBoard from "./SmallBoard";
import "../../styles/HoverTile.css";

const HoverTile = ({ onClick, smallBoard, boardNumber, lastMove, isValidBigBoardPosition, bigBoardStatus }) => {
  const [isHovering, setIsHovering] = useState(true);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  const getSmallBoard = ({ isVisible = true } = {}) => {
    return (
      <SmallBoard 
        key={boardNumber}
        onClick={onClick}
        board={smallBoard} 
        boardNumber={boardNumber}
        lastMove={lastMove}
        isValidBigBoardPosition={isValidBigBoardPosition}
        isVisible={isVisible}
      />
    );
  };

  const getMoveElement = () => {
    return <h1 className={`bigMove ${isHovering ? "hovering" : "" }`}>{bigBoardStatus}</h1>
  };

  return (
    <div className="hoverTile" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {getMoveElement()}
      {isHovering ? getSmallBoard() : getSmallBoard({ isVisible: false })}
    </div>
  );
};

export default HoverTile

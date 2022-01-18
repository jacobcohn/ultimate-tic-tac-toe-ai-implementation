import { useState, useEffect } from "react";

const emptyValidBigBoardData = {
  0: true,
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
};

const isValidBigBoardPosition = (boardData, lastMovePosition, positionInQuestion) => {
  if (lastMovePosition === null || lastMovePosition === undefined) return true;
  if (boardData[positionInQuestion] !== "") return false;
  if (lastMovePosition === positionInQuestion) return true;
  if (boardData[lastMovePosition] === "") return false;
  return true;
};

const useValidBigBoardPosition = (boardData, lastMovePosition) => {
  const [validBigBoardData, setValidBigBoardData] = useState(emptyValidBigBoardData);

  useEffect(() => {
    for (let i = 0; i < 9; i += 1) {
      setValidBigBoardData((prevState) => ({
        ...prevState,
        [i]: isValidBigBoardPosition(boardData, lastMovePosition, i),
      }));
    };
  }, [boardData, lastMovePosition]);

  return validBigBoardData;
};

export default useValidBigBoardPosition;

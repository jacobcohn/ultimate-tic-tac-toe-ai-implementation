import { useEffect } from "react";

const validBigBoardData = {
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
  useEffect(() => {
    for (let i = 0; i < 9; i += 1) {
      validBigBoardData[i] = isValidBigBoardPosition(boardData, lastMovePosition, i);
    };
  }, [boardData, lastMovePosition]);

  const checkStatus = (position) => validBigBoardData[position];

  return checkStatus;
};

export default useValidBigBoardPosition;

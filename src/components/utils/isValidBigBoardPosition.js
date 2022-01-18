const isValidBigBoardBox = (boardData, lastMovePosition, positionInQuestion) => {
  if (lastMovePosition === null || lastMovePosition === undefined) return true;
  if (boardData[positionInQuestion] !== "") return false;
  if (lastMovePosition === positionInQuestion) return true;
  if (boardData[lastMovePosition] === "") return false;
  return true;
};

export default isValidBigBoardBox;

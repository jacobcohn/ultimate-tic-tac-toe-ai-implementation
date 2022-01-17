const isValidBigBoardBox = (board, currentBigBoard, boxInQuestion) => {
  if (currentBigBoard === null) return true;
  if (board[boxInQuestion].winner !== "") return false;
  if (currentBigBoard === boxInQuestion) return true;
  if (board[currentBigBoard].winner === "") return false;
  return true;
};

export default isValidBigBoardBox;

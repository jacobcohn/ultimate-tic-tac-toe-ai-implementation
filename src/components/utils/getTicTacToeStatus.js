const isHorizontalWin = (board, player) => {
  for (let i = 0; i < 9; i += 3) {
    if (
      (board[i] === player) && 
      (board[i] === board[i + 1]) && 
      (board[i] === board[i + 2])
    ) return true;
  }

  return false;
};

const isVerticalWin = (board, player) => {
  for (let i = 0; i < 3; i += 1) {
    if (
      (board[i] === player) && 
      (board[i] === board[i + 3]) && 
      (board[i] === board[i + 6])
    ) return true;
  }

  return false;
};

const isDiagonalWin = (board, player) => {
  if (
    (board[4] === player) && 
    (board[4] === board[0]) && 
    (board[4] === board[8])
  ) return true;

  if (
    (board[4] === player) && 
    (board[4] === board[2]) && 
    (board[4] === board[6])
  ) return true;

  return false;
};

const isWinForPlayer = (board, player) => {
  if(isHorizontalWin(board, player)) return true;
  if(isVerticalWin(board, player)) return true;
  if(isDiagonalWin(board, player)) return true;
  return false;
};

const areAllSpacesTaken = (board) => {
  for (let i = 0; i < 9; i += 1) {
    if (board[i] === "") return false;
  }

  return true;
};

const getTicTacToeStatus = (board) => {
  if (board === null || board === undefined) return "";
  if (isWinForPlayer(board, "X")) return "X";
  if (isWinForPlayer(board, "O")) return "O";
  if (areAllSpacesTaken(board)) return " ";
  return "";
};

export default getTicTacToeStatus;

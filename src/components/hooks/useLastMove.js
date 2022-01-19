import { useState } from "react";

const emptyLastMove = {
  smallBoardPosition: null,
  bigBoardPosition: null,
};

const useLastMove = () => {
  const [lastMove, setLastMove] = useState(emptyLastMove);

  const updateLastMove = (bigBoardPosition, smallBoardPosition) => {
    setLastMove({
      smallBoardPosition,
      bigBoardPosition,
    });
  };

  const resetLastMove = () => {
    setLastMove(emptyLastMove);
  };

  return [lastMove, updateLastMove, resetLastMove];
};

export default useLastMove;

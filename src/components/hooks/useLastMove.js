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

  return [lastMove, updateLastMove];
};

export default useLastMove;

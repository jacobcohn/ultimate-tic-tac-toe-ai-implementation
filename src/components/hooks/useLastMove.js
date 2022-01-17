import { useState } from "react";

const emptyLastMove = {
  smallBoardPosition: null,
  bigBoardPosition: null,
};

const useLastMove = () => {
  const [lastMove, setLastMove] = useState(emptyLastMove);

  const updateLastMove = (smallBoardPosition, bigBoardPosition) => {
    setLastMove({
      smallBoardPosition,
      bigBoardPosition,
    });
  };

  return [lastMove, updateLastMove];
};

export default useLastMove;

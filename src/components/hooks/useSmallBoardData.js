import { useState } from "react";

const emptyLastMove = {
  smallBoardPosition: null,
  bigBoardPosition: null,
};

const emptySmallBoardData = {
  0: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  1: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  2: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  3: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  4: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  5: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  6: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  7: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  8: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
};

const useSmallBoardData = (currentPlayer) => {
  const [lastMove, setLastMove] = useState(emptyLastMove);
  const [smallBoardData, setSmallBoardData] = useState(emptySmallBoardData);

  const updateSmallBoardData = (bigBoardPosition, smallBoardPosition) => {
    setLastMove({
      smallBoardPosition,
      bigBoardPosition,
    });
    
    setSmallBoardData((prevSmallBoardData) => ({
      ...prevSmallBoardData,
      [bigBoardPosition]: {
        ...prevSmallBoardData[bigBoardPosition],
        [smallBoardPosition]: currentPlayer,
      },
    }));
  };

  return [lastMove, smallBoardData, updateSmallBoardData];
};

export default useSmallBoardData;

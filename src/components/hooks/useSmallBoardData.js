import { useState } from "react";

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

const emptyLastMove = {
  smallBoardPosition: null,
  bigBoardPosition: null,
};

const useSmallBoardData = (currentPlayer) => {
  const [smallBoardData, setSmallBoardData] = useState(emptySmallBoardData);
  const [lastMove, setLastMove] = useState(emptyLastMove);

  const updateSmallBoardData = (bigBoardPosition, smallBoardPosition) => {
    setSmallBoardData((prevSmallBoardData) => ({
      ...prevSmallBoardData,
      [bigBoardPosition]: {
        ...prevSmallBoardData[bigBoardPosition],
        [smallBoardPosition]: currentPlayer,
      },
    }));

    setLastMove({
      smallBoardPosition,
      bigBoardPosition,
    });
  };

  return [smallBoardData, lastMove, updateSmallBoardData];
};

export default useSmallBoardData;

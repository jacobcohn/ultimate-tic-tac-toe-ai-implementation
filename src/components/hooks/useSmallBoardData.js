import { useState } from "react";
import emptySmallBoardData from "../utils/emptySmallBoardData";

const useSmallBoardData = (currentPlayer) => {
  const [smallBoardData, setSmallBoardData] = useState(emptySmallBoardData);

  const updateSmallBoardData = (bigBoardPosition, smallBoardPosition) => {
    setSmallBoardData((prevSmallBoardData) => ({
      ...prevSmallBoardData,
      [bigBoardPosition]: {
        ...prevSmallBoardData[bigBoardPosition],
        [smallBoardPosition]: currentPlayer,
      },
    }));
  };

  const resetSmallBoardData = () => {
    setSmallBoardData(emptySmallBoardData);
  };

  return [smallBoardData, updateSmallBoardData, resetSmallBoardData];
};

export default useSmallBoardData;

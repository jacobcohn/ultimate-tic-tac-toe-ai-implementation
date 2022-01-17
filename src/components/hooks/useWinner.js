import { useState, useEffect } from "react";
import getTicTacToeStatus from "../utils/getTicTacToeStatus";

const useWinner = (bigBoardData) => {
  const [winner, setWinner] = useState("");

  useEffect(() => {
    const ticTacToeStatus = getTicTacToeStatus(bigBoardData);
    setWinner(ticTacToeStatus);
  }, [bigBoardData]);

  return winner;
};

export default useWinner;

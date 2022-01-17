import { useState } from "react";

const useCurrentPlayer = (initialPlayer) => {
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);

  const updateCurrentPlayer = () => {
    setCurrentPlayer((currentPlayer === "X") ? "O" : "X");
  };

  return [currentPlayer, updateCurrentPlayer];
};

export default useCurrentPlayer;

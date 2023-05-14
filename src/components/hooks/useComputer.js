import { useEffect } from "react";
import { getBestMove } from "@jacobcohn/ultimate-tic-tac-toe-ai";

const getCurrentPlayerStr = (currentPlayer) => {
    return (currentPlayer === "X") ? "1" : "2";
};

const getValidBigBoardDataStr = (validBigBoardData) => {
    const legalBoards = [];

    for (let i = 0; i < 9; i++) {
        if (validBigBoardData[i]) legalBoards.push(i);
    };

    if (legalBoards.length === 1) return legalBoards[0].toString();
    return "9";
};

const getSmallBoardDataStr = (smallBoardData) => {
    let str = "";

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const char = smallBoardData[i][j];

            if (char === "") {
                str += "0";
            } else if (char === "X") {
                str += "1";
            } else if (char === "O") {
                str += "2";
            }
        };

        str += "/";
    };

    str = str.slice(0, -1);

    return str;
};

const getPositionStr = (currentPlayer, validBigBoardData, smallBoardData) => {
    let str = "";

    str += getCurrentPlayerStr(currentPlayer);
    str += " ";
    str += getValidBigBoardDataStr(validBigBoardData);
    str += " ";
    str += getSmallBoardDataStr(smallBoardData);

    return str;
};

const useComputer = (isComputerTurn, currentPlayer, validBigBoardData, smallBoardData, handleMove, resetCurrentPlayer) => {
  useEffect(() => {
    console.log("hello")
    setTimeout(() => {
        if (currentPlayer !== "O") return;
        if (!isComputerTurn) return;
        console.log("hello 2")

        const positionStr = getPositionStr(currentPlayer, validBigBoardData, smallBoardData)
        console.log(positionStr);
        
        const [ move, , ] = getBestMove(positionStr, 500);
        const { big: bigIndex, small: smallIndex } = move;
        
        console.log(bigIndex, smallIndex)
        handleMove(bigIndex, smallIndex, false);
    }, 100);

  }, [validBigBoardData])
};

export default useComputer;

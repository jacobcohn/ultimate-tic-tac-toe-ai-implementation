import React from "react";
import "../../styles/NewGameBtn.css";

const NewGameBtn = ({ onClick }) => {
  return <button className="newGameBtn" onClick={onClick}>New Game</button>;
};

export default NewGameBtn;

import { useState } from "react";

const useToggle = (optionOne, optionTwo) => {
  const [toggle, setToggle] = useState(optionOne);
  const [nextStartingToggle, setNextStartingToggle] = useState(optionTwo);
  
  const switchToggle = () => {
    setToggle((toggle === optionOne) ? optionTwo : optionOne);
  };

  const resetToggle = () => {
    setToggle(nextStartingToggle);
    setNextStartingToggle((nextStartingToggle === optionOne) ? optionTwo : optionOne);
  };

  return [toggle, switchToggle, resetToggle];
};

export default useToggle;

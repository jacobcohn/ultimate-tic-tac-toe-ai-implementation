import { useState } from "react";

const useToggle = (optionOne, optionTwo) => {
  const [toggle, setToggle] = useState(optionOne);

  const switchToggle = () => {
    setToggle((toggle === optionOne) ? optionTwo : optionOne);
  };

  const resetToggle = () => {
    setToggle(optionOne);
  };

  return [toggle, switchToggle, resetToggle];
};

export default useToggle;

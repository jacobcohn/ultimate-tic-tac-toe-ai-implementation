import { useState } from "react";

const useToggle = (optionOne, optionTwo) => {
  const [toggle, setToggle] = useState(optionOne);

  const switchToggle = () => {
    setToggle((toggle === optionOne) ? optionTwo : optionOne);
  };

  return [toggle, switchToggle];
};

export default useToggle;

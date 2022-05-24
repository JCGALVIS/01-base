import { useState } from "react";

type Props = {
  initialValue?: number;
};

export const Counter = (props: Props) => {
  const { initialValue = 0 } = props;
  
  const [counter, setCounter] = useState<number>(initialValue);
  
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

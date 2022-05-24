import { useCouner } from "../hooks/CounterHook";

export const CounterHook = () => {
  const { counter, elementToAnime, handleClick } = useCouner({ maxCount: 15 });

  return (
    <>
      <h1>Counter Hook:</h1>
      <h2 ref={elementToAnime}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

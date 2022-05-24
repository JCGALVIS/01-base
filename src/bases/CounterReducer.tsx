import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = { counter: 0, previous: 0, changes: 0 };

type CounterAction =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { changes, counter } = state;

  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };

    case "increaseBy":
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: counter,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [CounterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(CounterState, null, 2)}</pre>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

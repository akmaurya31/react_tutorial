import { useReducer, useEffect, useRef } from 'react';
// Tips: terms of initial state, action object, dispatch, and reducer mean.
//1.The initial state is the value the state is initialized with.
//2.An action object is an object that describes how to update the state.
//3.The dispatch is a special function that dispatches an action object.
//4.The reducer is a pure function that accepts 2 parameters: the current state and an action object. Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

const initialState = {
  isRunning: false,
  time: 0
};

export default function UseReducer1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div className="stopwatch">
      {state.time}s
      <div>
        <button onClick={() => dispatch({ type: "start" })}>Start</button>
        <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}

// export default UseReducer1;
//useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. callback argument is a function where to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values.
//How often do you use useReducer() compared to useState()?
/* The useReducer() hook lets you separate the state management from the rendering logic of the component.

const [state, dispatch] = useReducer(reducer, initialState) accepts 2 arguments: the reducer function and the initial state. Also, the reducer returns an array of 2 items: the current state and the dispatch function. */
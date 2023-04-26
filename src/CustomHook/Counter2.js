import React, { useState } from "react";
import useCounter from "./useCounter"; 
 
function Counter2() {
  const [count, Increment, Decrement, Multiple] = useCounter();

  return (
    <>
    <div>{count}</div>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Multiple}>Multiple</button>
    </>
  )
}
export default Counter2;

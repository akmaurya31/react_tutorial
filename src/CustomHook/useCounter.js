import React, { useState } from "react";

function useCounter(initialvalue = 0) {
  const [count, handleCount] = useState(0);
  function Increment() {
    handleCount(count + 1);
  }

  function Decrement() {
    handleCount(count - 1);
  }

  function Multiple() {
    handleCount(count * 2);
  }

  return [count, Increment, Decrement, Multiple];
}
export default useCounter;

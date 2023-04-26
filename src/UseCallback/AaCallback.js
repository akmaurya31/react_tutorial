import React, { useState,useEffect, useCallback } from "react";
import AaChild from "./AaChild";
//React re-renders a component only when a change occurs to its state variables or props.
function AaCallback() {
  const [num, setAdd] = useState(0);
  const Learning=useCallback(()=>{
    console.log("Hi 7");
  },[])
  return (
    <>
      <AaChild Learning={Learning} num={num} /> {/* Child Component har bar render ho rha hai  aisa nhi hona chayiye */}
      <h1>{num}</h1>
      <button onClick={() => setAdd(num + 1)}> Addition </button>
      <button onClick={() => setAdd(num-1)}> Subtraction </button>
    </>
  );
}
export default AaCallback;
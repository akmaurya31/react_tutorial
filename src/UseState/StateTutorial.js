import React, { useState } from "react";
import LoginCompoUseState from "./LoginCompoUseState";

// import {useState} from "react"; //chahe alag alag import krke use karo chache single import krke
// import React from "react";   
/*
Rules of Hook
1- Function component me hi likhte hai
2- Component wale page par import krna hota hai
3- Must be call top level
4- isme if else switch nhi use kr skte hai conditional nhi hota hai  

Q5. What is useState() in React?

The useState() is a built-in React Hook that allows you for having state variables in functional components.
 
UseState: It is used to update the state and to set the initial value of the state. The ‘useState’ is similar to ‘this.setState’ in class. The useState returns a pair where the first element is the current state value/initial value, and the second one is a function that allows us to update it. For example: If we create a text variable and we want to make it a part of the state, then we can return two elements (like ‘text’ and ‘set text’) from the state hook. 

*/
const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");
  const [avi_count, kumar_fun] = useState(1); //is tarike se bhi use kr skte hai default value 0
  const [tcount, setCount] = useState(0);
  const [decrement, setDecrement] = useState(100);

  // function onClickCounter(){  
  //   setDecrement(decrement-1);
  // }

  let x=10;
  function updateStateNo(){
    x=15;
  }

  console.log('x is value -',x);

  function onClickCount(){ 
    let ttcount=tcount+1;
    setCount(ttcount);
    setDecrement(decrement-1);
  }

  function clk_ku_fun(){
     let tavi_count=avi_count*7;
    kumar_fun(tavi_count);
  }

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h1>Learning State</h1>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
      <br/>
      <button onClick={clk_ku_fun}>Add Karo {avi_count}</button>
      <button onClick={onClickCount}>Add {tcount} Decrement: {decrement}</button>

      <button onClick={updateStateNo}>updateStateNo {x}</button>
      <br/>
      <p>{x} - { (x)>15?"Greater":"Smaller"}</p>
      <LoginCompoUseState/> 
    </div>
  );
};

export default StateTutorial;

import React, { useEffect, useState } from "react";
import axios from "axios";
//Q. What is the use of useEffect React Hooks?
//The useEffect React Hook is used for performing the side effects in functional components. With the help of useEffect, you will inform React that your component requires something to be done after rendering the component or after a state change. 
//The useEffect React Hook will accept 2 arguments: useEffect(callback,[dependencies]);
// आपको अपने components में side effects करने की अनुमति देता है।
//साइड इफेक्ट के कुछ उदाहरण हैं: fetching data, timers और सीधे DOM को अपडेट करना।

//Use Effect: It is used to perform the side effect. For example: If we want to perform a certain task when the content of our application is updated, then we can take the help of the UseEffect hook. In other words, effect Hooks are similar to componentDidMount(), componentDidUpdate() and componentWillUnmount() lifecycle methods. 

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);  //add new 
  const [divide, setZ] = useState(828);  //add new 

  function func(){   //because it is render any value on state
    setX(x+6); //jab state change hoga tab useEffect automatic call hoga
    setX(7);//isme nhi hoga change
    setX(x+6);  //newlogic
    console.log("hi I click",x);
  }

  function onClickdivide(){
    setZ(divide+9); 
  }

  useEffect(() => {
    console.log("Effect on divide time");
  },[divide]);

  //arrow function likha hai main
  //on page load time
  useEffect(() => {
    console.log("This useEffect - Always","Component Mounted");
  });

  useEffect(() => {
    console.log("This useEffect - One Time Only");
  }, []);

  useEffect(() => {
    // setZ(divide+9);  magic
    console.log("on Divide button",divide);
  }, []);   //before click to kya hoga

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      <h1>Learning  useEffect</h1>  
      <p>{data}</p>  
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);        //single line function as arrow funciton 
        }}
      >
        Click
      </button>
      <button onClick={func}>No Effect</button>
      {/* Divide={divide}     magic logic */}

      <button onClick={onClickdivide}>Divide Btn {divide} </button>
    </div>
  );
}

export default EffectTutorial;

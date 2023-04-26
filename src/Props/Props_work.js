import React from "react"; 
import DummyComponent from "./DummyComponent";
 
//the tag <dummyComponent> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.

//The props in React are the inputs to a component of React.

//Props stand for Properties. It is used to Pass information into the React Components. For example, if we create a custom Component, then by using Props, we can pass data into it in the form of Objects, strings, numbers, etc.

const Props_work = () => {   
  return (
    <div>
      <h1>Props how to work ?</h1>
      <DummyComponent name={"avinash"} ></DummyComponent>
      <DummyComponent name={"maurya"} ></DummyComponent>
     
    </div>
  );
};

export default Props_work;

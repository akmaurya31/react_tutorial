import React, { useContext } from "react";
import { AppContext,data1,data2 } from "./ContextTutorial";
//Prop drilling is the process of passing data from one component via several interconnected components to the component that needs it.

//Passing data through multiple components is not a good way of writing clean, reusable, and DRY code. The React context API is a fast way of avoiding prop drilling and ensuring your data is managed globally without using a huge third-party state management app like Redux and MobX.

//no direct connection to passing the value chlidC from PropDrilling Componentfile
//How to aviod it ? using Context Api

function PropDrilling() {
  // const { username } = useContext(AppContext);
    const name1  = useContext(data1);
    const name2  = useContext(data2);
    console.log("fff",name1,name2);

  return (
    <div>
      <h1>ChildC</h1>
      <h1>data2: {name1} {name2}</h1>
    </div>
  );
}

export default PropDrilling;

import React, { useContext } from "react";
import { AppContext,data1,data2 } from "./ContextTutorial";

function ChildC() {
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

export default ChildC;

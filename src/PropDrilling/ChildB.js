import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";
import ChildC from "./ChildC";

function ChildB() { 
  return (
    <div>
      <h1>ChildB From ChildC</h1>
      <ChildC/>
    </div>
  );
}

export default ChildB;

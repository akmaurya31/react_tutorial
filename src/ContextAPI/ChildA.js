import React, { useContext } from "react";
import { dataContext } from "./ContextAPI";
import ChildB from "./ChildB";
function ChildA() { 
  return (
    <div>
      <p>I am Child A</p>     
      <ChildB/>
    </div>
  );
}
export default ChildA;

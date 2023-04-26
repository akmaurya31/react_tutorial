import React, { useContext } from "react";
import { teacherContext } from "./ContextAPI";
import ChildC from "./ChildC";
function ChildB() { 
  return (
    <div>
      <p>I am Child B</p>    
      <teacherContext.Consumer>
      {(teacherPass)=>{
            return( <h6>my teacher name is {teacherPass}</h6>)}
      }
      </teacherContext.Consumer>

      <ChildC/>
    </div>
  );
}
export default ChildB;

import React, { useContext } from "react";
import { dataContext } from "./ContextAPI";

function ChildC() {  
  return (
    <>
    <p>I am Child C</p>
    <dataContext.Consumer>
      {(namePass)=>{
            return( <h6>my name is {namePass}</h6>)}
      }
    </dataContext.Consumer>
      
    </>
  );
}

export default ChildC;

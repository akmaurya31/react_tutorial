import React, { useState } from "react";
//Props Inteview Tips
//1- Props full form Properties
//2- Props used for transfer data from one Component to another
//3- Props are read only
//4 Props are just like function in Js
function DummyComponent(props){
  //props.name="Maurya";
  //Cannot assign to read only property 'name' of object '#<Object>'
 
  return (
    <>
      <h5>Dummy Component - {props.name}</h5>       
    </>
  );
};

//4 Props are just like function in Js
// function addtion(a,b){
//   return a+b
// }

// //addition(5,6)

export default DummyComponent;

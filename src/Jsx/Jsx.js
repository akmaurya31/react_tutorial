import React, { useState } from "react";
 
//Tips Interview
//1- JSX stands for  javascript XML or Extension
//2- it helps write and add html in react
//3 It converts  HTML tags into  React element
// aisa bhi nhi complosry hota hai JSX use krna react me its is not compulsory

// Rules 
// 1. Html Code must wrap top level element like <>....</> fragment <div>....</div>
// 2. Element must be closed
// 3. Attribute Class = className
// 4. No if else condition inside jsx but ternary operator we can use.  like (true ? "yes":no)
// 5. JS experession in JSX must be wrapped in {} 

function Jsx(){ 
  const pi=3.14;
  let CM="Yogi";
  var PM="Modi";
  return (
    <>
     <h1>Toturial  JSX</h1>  
      <h5>Jsx - {pi}</h5>    
      <h5>Jsx - {CM=='Yogi'?'Sri Yogi Adithay Nath':'Other'}</h5>    
      <h5>Jsx - {(PM)} Ji</h5>       
    </>
  );
};
 
export default Jsx;

import axios from "axios";
import React, { useState,useEffect } from "react";   
 
function Jsmap(){ 
  const [userdata,hundleData]=useState([]);
  useEffect(()=>{
    // console.log(userdata);
    // console.log(`JSON.stringify(${userdata})`);
    //<span>{JSON.stringify(sata)}</span>
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      // console.log(response)
      hundleData(response.data);
    });
  },[])  
  return (
    <>
    <div>Hi I am 17</div>
      {userdata.map((sata) => (
       <>
        <span>{sata.email}</span> <br/>        
        </>
      ))}
    </>
  )
};
 
export default Jsmap;

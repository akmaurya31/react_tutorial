import axios from "axios";
import React, { useState,useEffect } from "react";   
 
function AxPost(){ 
  const data ={fname:"",lname:""}  
  const [inputData,hundleinputData]=useState([]);
  useEffect(()=>{ 
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
 
export default AxPost;

import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";
import ChildB from "./ChildB";

function ChildA() {
  // const { username } = useContext(AppContext);

  return (
    <div>
      <h1>ChildA use ChildB</h1>
      <ChildB/>
    </div>
  );
}

export default ChildA;

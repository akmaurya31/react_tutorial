import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <>
    <h5>LoginCompo UseContext</h5>
      <div>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export default Login;

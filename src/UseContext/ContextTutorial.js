import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

/*
 Q. What is the difference between useContext and context?
 Context is a React feature for sharing state between several parent and child components with the help of a provider. useContext is a hook that lets you easily “hook into” context, thereby accessing shared state. Using context is one method of state management, which can be combined with other methods such as Redux.

  Q. What is the difference between context API and Redux? 
  Redux is an open-source library that creates and manages a global shared state which is referred to as a single source of truth. Actions and reducers are used to manipulate this store. React Context API is a state management solution that is built-in with react.

You can hold inside the context:
global state
theme
application configuration
authenticated user name
user settings
preferred language
a collection of services

 */

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    <>
    <h1>Solution useContext Hook</h1>
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />  <User />
    </AppContext.Provider>
    </>
  );
}

export default ContextTutorial;

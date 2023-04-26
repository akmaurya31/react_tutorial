import React, { useReducer } from "react";
import UseReducer1 from "./UseReducer1";
import LoginCompoUseReducer from "./LoginCompoUseReducer";

/*what is useReducer?
useReducer is a react hook for state managment
alternative of useState hook
Perfreable for complex state management logic

syntex
const[state_dispatch] =useReducer(reducer,initialstate)

what is reducer function in useReducer?
Reducer is a function  acceptes two parameter
newState=reducer(currentState,action)

मूल रूप से, useReducer Hook, useState Hook के जैसा है। यदि आप जटिल तर्क पर निर्भर state के कई हिस्सों पर नज़र रखते हैं, तो useReducer उपयोगी हो सकता है। reducer फ़ंक्शन में आपका कस्टम स्टेट लॉजिक होता है और initialState एक साधारण मान हो सकता है लेकिन आम तौर पर इसमें एक ऑब्जेक्ट होता है।
*/

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>What is reducer?</h1>
      <h5>{state.count}</h5>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
      hi <UseReducer1/>
      Login <LoginCompoUseReducer/>
    </div>
  );
};

export default ReducerTutorial;

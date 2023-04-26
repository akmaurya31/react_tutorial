import React, { createContext, useContext } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
import Childnodata from "./Childnodata";

//Prop drilling is the process of passing data from one component via several interconnected components to the component that needs it.

//Passing data through multiple components is not a good way of writing clean, reusable, and DRY code. The React context API is a fast way of avoiding prop drilling and ensuring your data is managed globally without using a huge third-party state management app like Redux and MobX.

//no direct connection to passing the value chlidC from PropDrilling Componentfile
//How to aviod it ? using Context Api

/* Interview Tips
How do you use context API with Hooks?
 A-createContext  B-Provider   C-useContext(Consumer)
Create Provider Consumer

hamare pass koi data hoga koi use provide krega koi use USE krega

without passing nested Component

Use createContext() to create the Context.
Pull the Provider out of Context created from createContext()
Wrap your Parent component with the Provider.
Consume the context with useContext() hooks.

is contextApi is also problematic ? yes kyokni multiple context create krne pdte hai 
//useContext Hook
*/

const dataContext = createContext();
export const teacherContext = createContext(); //context create krna hota hai
function ContextAPI() {
  const namePass = "Arjun";
  const teacherPass = "Dornacharya";
  return (
    <div>
      <h1>Learning ContextAPI</h1>
      <Childnodata></Childnodata>

      <dataContext.Provider value={namePass}>
        <teacherContext.Provider value={teacherPass}>
          <ChildB></ChildB>
        </teacherContext.Provider>
      </dataContext.Provider>
    </div>
  );
}

export default ContextAPI; //Tips : default kewal ek hi ho skta hai
export { dataContext };

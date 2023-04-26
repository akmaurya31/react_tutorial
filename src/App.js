import "./App.css";
// import Jsx from "./Jsx/Jsx";

// import Props_work from "./Props/Props_work";
// React Hooks allows us to use the features of class-based components in function-based Components.
//It even allows us to use "state" and other React features without writing a class. For example: Earlier, we were using "this.state" whenever we needed to access the state but now we can use the "UseState" hook. 
//Hooks are the functions which "hook into" react state and lifecycle features from the function components.
// Hooks-16.8 release  में पेश किया गया नया feature है। jo आपको एक class लिखे बिना  state  और अन्य प्रतिक्रिया सुविधाओं का उपयोग करने की अनुमति देता है।  हुक  वे कार्य हैं जो  React state  में “ hook ” करते हैं और फ़ंक्शन घटकों से जीवनचक्र की विशेषताएं हैं। यह classes के अंदर काम नहीं करता है। 

import Listkey from "./ListKey/Listkey";

// import AaCallback from "./UseCallback/AaCallback";

// import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";

//React Interview Questions for Freshe Tips
// Q1. What is React? 
//1. React is a front-end and open-source JavaScript library
//2. It supports server-side rendering.
//3. It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.
//4. It follows unidirectional data binding or data flow.

// Q2. What are the advantages of using React?
//Use of Virtual DOM to improve efficiency  Reusable components:

// Q3.What are the limitations of React?
// React is not a full-blown framework as it is only a library.

function App() {
  return (
    <div className="App">       
      <Listkey/>
    </div>
  );
}

export default App;

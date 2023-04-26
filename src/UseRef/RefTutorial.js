import React, { useRef,useState } from "react";
//The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

//kabhi kabhi dom ko manipulate krna hota hai

// UseRef: It returns a mutable reference object, which has a ".current" property.  It can be used to point an element inside a DOM. In most simple words, it is a holder which can store an element of the DOM inside its ".current" property.
//UseRef: यह एक mutable reference object  - returnsलौटाता है, जिसमें ".current" गुण होता है। इसका उपयोग DOM के अंदर किसी तत्व को इंगित करने के लिए किया जा सकता है। सबसे सरल शब्दों में, यह एक धारक है जो डोम के एक तत्व को अपनी ".current" संपत्ति के अंदर संग्रहीत कर सकता है।
//why we use useRef?
//we can't add edit  state props

function RefTutorial() {
  const inputRef = useRef(null);
  const inputRefA = useRef();
  const PizzaRef = useRef();
  const NumberOfPizzaRef = useRef();

  const [topping, setTopping] = useState("Medium")
  const [minorder, setMinorder] = useState(0)

  const onOptionChange = e => {
    setTopping(e.target.value);
     
    if(e.target.value=='Medium'){   
      setMinorder(5)   
      PizzaRef.current.style.color="Red";
    }else if(e.target.value=='Regular'){
      setMinorder(3)   
      PizzaRef.current.style.color="Green";
    }else if(e.target.value=='Large'){
      setMinorder(10)  
      PizzaRef.current.style.color="Blue";
    }

    NumberOfPizzaRef.current.focus();

  }

  const onClick = () => {
    inputRef.current.value = "";
  };

  const onClickA = () => {
    inputRefA.current.style.color="Red";
    inputRefA.current.value="Maurya";
  };

  return (
    <div>
      <h1>Study useRef</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>

      <input type="text" placeholder="Ex..." ref={inputRefA} />
      <button onClick={onClickA}>Change Name A</button>

      <div className="App">
      <h3>Select Pizza Size</h3>

      <input
        type="radio"
        name="topping"
        value="Regular"
        id="regular"
        checked={topping === "Regular"}
        onChange={onOptionChange}
      />
      <label htmlFor="regular">Regular</label>

      <input
        type="radio"
        name="topping"
        value="Medium"
        id="medium"
        checked={topping === "Medium"}
        onChange={onOptionChange}
      />
      <label htmlFor="medium">Medium</label>

      <input
        type="radio"
        name="topping"
        value="Large"
        id="large"
        checked={topping === "Large"}
        onChange={onOptionChange}
      />
      <label htmlFor="large">Large</label>

      <p>
        Select topping <span ref={PizzaRef}><strong>{topping}</strong></span>
      </p>
      <p> <input type="text" ref={NumberOfPizzaRef} value={minorder} /> </p>
    </div>

    </div>
  );
}

export default RefTutorial;

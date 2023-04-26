import React, { useRef, useState } from "react";

function RefAssignment() {
  // Creating a ref object using useRef hook
  const focusPoint = useRef(null);

  const book_refPoint = useRef("Ramayan");

  const onClickHandler = () => {
    focusPoint.current.value = "Jai Shree Ram";
    focusPoint.current.focus();
  };
  const [father_name, setFName] = useState("Dasrath");

  function onReset() {
    setFName("");
    book_refPoint.current.focus();
    book_refPoint.current.style.color="Blue";
  }

  return (
    <>
      <button onClick={onClickHandler}>ACTION</button>
      <label>Click on the action button to focus and populate the text.</label>
      <br />
      <textarea ref={focusPoint} />

      <input
        type="text"
        ref={book_refPoint}
        value={father_name}
        onChange={(e) => setFName(e.target.value)}
      />
      <button onClick={onReset}> Reset </button>
    </>
  );
}

export default RefAssignment;

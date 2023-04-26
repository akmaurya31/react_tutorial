
/* https://www.freecodecamp.org/news/how-to-create-react-hooks/

  //A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.
 //we can use other hook in custom hooks as well
 //why to use custom hook?
 //higher order function repect same code again and again each
 //to remove the duplicated logic in component
 //we can extract that logic to custom hook 
 
 */

import React from "react";
import { useLayoutEffect, useEffect, useRef,useState } from "react"; 
import useCopyToClipboard from "./CustomHook1";

const TextCopy = props => {
  const [isCopied, handleCopy] = useCopyToClipboard('Jai Siya Ram');
  console.log(isCopied,"eee");
  return (
    <div>
      <button onClick={handleCopy}>Click to copy</button>
      <span>{isCopied && 'Copied!'}</span>
    </div>
  );
};

export default TextCopy;
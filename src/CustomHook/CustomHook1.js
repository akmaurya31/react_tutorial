
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
import copy from "copy-to-clipboard";   //need to be install

export default function useCopyToClipboard(resetInterval = null) {
  const [isCopied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback((btext) => {
    // let textstr=JSON.stringify(btext);
    // console.log(textstr,'ddd');
    if (typeof btext === "string" || typeof btext == "number") {
      copy(btext.toString());
      setCopied(true);
    } else {
      setCopied(false);
      console.log(btext);
      console.error(
        `Cannot copy typeof ${typeof btext} ${btext} to clipboard, must be a string or number.`
      );
    }
  }, []);

  React.useEffect(() => {
    let timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
}

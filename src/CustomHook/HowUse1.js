import React from "react";
// import ClipboardIcon from "../svg/ClipboardIcon";
// import SuccessIcon from "../svg/SuccessIcon";
import useCopyToClipboard from "./CustomHook1";
import CopyToClipElement from "./CopyToClipElement";

function CopyButton({ code }) {
  // isCopied is reset after 2 second timeout
  const [isCopied, handleCopy] = useCopyToClipboard(2000);

  return (
    <>
    copy:<CopyToClipElement/>
    <button onClick={() => handleCopy(code)}>
      {isCopied ? 'SuccessIcon' :'ClipboardIcon' }
    </button>
    </>
  );
}

export default CopyButton;
import React from "react";
const CopyToClipElement = ({ text }) => {
  const myRef = React.useRef(null);
  const [data, setData] = React.useState(text);
  React.useEffect(() => setData(text), [text]);

  React.useEffect(() => {
    if (myRef.current && data) {
      myRef.current.select();
      document.execCommand("copy");
      setData(null);
    }
  }, [data, myRef.current]);

  return <div>{data && <textarea ref={myRef}>{data}</textarea>}</div>;
};

const Element = () => {
  const [copyText, setCopyText] = React.useState("");
  const data = ["Text to be copied", "Copy foo"];

  return (
    <div>
      hi i copy to clop
      {data.map((text) => (
        <span
          style={{ margin: "10px", cursor: "pointer", color: 'blue' }}
          onClick={() => setCopyText(text)}
        >
          {text}
        </span>
      ))}
    
    </div>
  );
};
export default CopyToClipElement;
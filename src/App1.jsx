import React, { useState } from "react";

const App = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  return (
    <div>
      <input
        style={{ margin: "10px" }}
        placeholder="Enter the first number"
        value={first}
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      ></input>
      <input
        style={{ margin: "10px" }}
        placeholder="Enter the operation"
        onChange={(e) => {
          setOperation(e.target.value);
        }}
      ></input>
      <input
        style={{ margin: "10px" }}
        placeholder="Enter the second number"
        value={second}
        onChange={(e) => {
          setSecond(e.target.value);
        }}
      ></input>
      =<div value={result}>{result}</div>
      <button
        onClick={() => {
          const a = parseInt(first);
          const b = parseInt(second);
          let res = "";
          if (isNaN(a) || isNaN(b)) {
            console.log("HERE");
            res = "invalid";
            setResult(res);
            return;
          }
          if (operation === "+") {
            res = a + b;
          } else if (operation === "*") {
            res = a * b;
          } else if (operation === "-") {
            res = a - b;
          } else if (operation === "/") {
            res = a / b;
          } else {
            res = "invalid";
          }
          setResult(res);
        }}
      >
        evaluate
      </button>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";

let timer;

const App = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    timer = setInterval(() => {
      if (!isDisabled) {
        setSeconds(seconds + 1);
        if (seconds == 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div>
      <h1> Timer </h1>
      <div>
        <h1>
          {(minutes < 10 ? "0" : "") + minutes}:
          {(seconds < 10 ? "0" : "") + seconds}
        </h1>
      </div>
      <button
        onClick={() => {
          setIsDisabled(false);
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          setMinutes(0);
          setSeconds(0);
          setIsDisabled(true);
        }}
      >
        {" "}
        reset{" "}
      </button>
      <button
        onClick={() => {
          setIsDisabled(true);
        }}
      >
        {" "}
        pause
      </button>
    </div>
  );
};
export default App;

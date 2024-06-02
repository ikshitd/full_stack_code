import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  return (
    <div>
      {task.length === 0 ? (
        <div> no tasks available yet !!</div>
      ) : (
        <div>
          <h3>The number of remaining tasks are : {task.length}</h3>
          <ul>
            {task.map((t) => {
              return (
                <div>
                  <div>
                    <h4 style={{ display: "inline" }}>{t.message}</h4>
                    <button
                      style={{
                        height: "5px",
                        width: "5px",
                      }}
                      onClick={() => {
                        setTask((arr) =>
                          arr.filter((item) => item.id !== t.id)
                        );
                      }}
                    >
                      *
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
      <div>
        <input
          placeholder="enter the task here"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <br></br>
        <button
          onClick={() => {
            if (input.length === 0 || input === "") {
              return;
            }
            const newTask = {
              id: id + 1,
              message: input,
            };
            setId(id + 1);
            setTask((arr) => [...arr, newTask]);
            setInput("");
          }}
        >
          add to the list{" "}
        </button>
      </div>
    </div>
  );
}

export default App;

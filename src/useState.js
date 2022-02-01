import React, { useState } from "react";
import "./app.css";

function State() {
  const [year, setYear] = useState(2021);
  const [manager, setManager] = useState("Ahvram");
  const [status, setStatus] = useState("Open 4 business!");
  return (
    <>
      <h3>{year}</h3>
      <button onClick={() => setYear(year + 1)}>Add a Year</button>
      <button onClick={() => setYear(year - 1)}>Take a Year</button>
      <h2>Manager on duty: {manager}</h2>
      <button onClick={() => setManager("Bill")}>New Manger</button>
      <h3>Status:</h3>
      <h4>{status}</h4>
      <button onClick={() => setStatus("Closed right now :(")}>Close</button>
      <button onClick={() => setStatus("Open 4 biz!")}>Open</button>
      <button onClick={() => setStatus("Be right back!")}>Break</button>
    </>
  );
}

const App = () => {
  return (
    <div className="container">
      <h1>useState</h1>
      <State />
    </div>
  );
};

export default App;

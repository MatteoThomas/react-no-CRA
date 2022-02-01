import React from "react";
import "./app.css";

//ARRAY
const gear = ["TR-8 ", "Digitone ", "BSII "];

//MAP ARRAY
const gearMapped = gear.map((item) => <li>{item}</li>);

//ARRAY DESTRUCTURED
const [drumMachine, FMSynth, Synth] = ["TR-8", "Digitone", "BSII"];

const App = () => {
  return (
    <div className="container">
      <h1>Array Destructuring</h1>

      {/* DISPLAY UNMAPPED ARRAY */}
      <ul>{gear}</ul>

      {/* DISPLAY MAPPED ARRAY */}
      <h3>Mapped Array</h3>
      <ul>{gearMapped}</ul>

      {/* DISPLAY DESTRUCTURED ARRAY ITEM */}
      <h3>Destructured Array</h3>
      <ul>
        <li>{Synth}</li>
        <li>{drumMachine}</li>
        <li>{FMSynth}</li>
      </ul>
    </div>
  );
};

export default App;

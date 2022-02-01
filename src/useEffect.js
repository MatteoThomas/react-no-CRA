import React, { useEffect, useState } from "react";
import "./app.css";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`Checked: ${checked}`);
  });
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />

      {checked ? <h3>Checked</h3> : <h3>Not checked</h3>}
    </>
  );
}

const App = () => {
  return (
    <div className="container">
      <h1>useEffect</h1>
      <Checkbox />
    </div>
  );
};

export default App;

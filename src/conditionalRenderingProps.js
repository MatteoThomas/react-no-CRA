import React from "react";
import "./app.css";

function Club({ activity }) {
  return <h2>Let's go {activity}</h2>;
}

function Hike({ activity }) {
  return <h2>Let's go {activity}</h2>;
}

//USING IF STATEMENT
function ActivityIf(props) {
  if (props.choice === "outdoor") {
    return <Hike activity="Hiking" />;
  } else if (props.choice === "indoor") {
    return <Club activity="Clubbin'" />;
  } else return <h2>Nothing to do, sorry.</h2>;
}

//USING TERNARY OPERATOR
function ActivityTernary(props) {
  return (
    <>
      <h3>I want to say...</h3>
      {props.choice === "outdoor" ? (
        <Hike activity="Hiking" />
      ) : props.choice === "indoor" ? (
        <Club activity="Clubbin'" />
      ) : (
        <h2>There's nothing to do for you!</h2>
      )}
    </>
  );
}

const App = () => {
  return (
    <div className="container">
      <h1>Conditional Render with Props</h1>
      <ActivityIf choice="outdoor" />
      <ActivityTernary choice="huh" />
    </div>
  );
};

export default App;

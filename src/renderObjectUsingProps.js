import React from "react";
import "./app.css";

//RENDER OBJECT USING PROPS
const clubList = [
  { name: "Beta", city: "Denver", age: 10 },
  { name: "Underlight", city: "Corpus", age: 3 },
  { name: "Plush", city: "Austin", age: 13 },
];

function PrintClubs({ clubs }) {
  return (
    <div className="container">
      <h1>Render Object using Props</h1>
      <ul>
        {clubs.map((club) => (
          <>
            {" "}
            <li>
              {club.name} is located in {club.city} and is {club.age} years old.
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

const App = () => {
  return <PrintClubs clubs={clubList} />;
};

export default App;

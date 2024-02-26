import React from "react";

const App = () => {
  const planets = [
    { name: "Mars", isGasPlanet: true },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: true },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div>
      {planets.map((value, key) => {
        if(value.isGasPlanet) return <h1>{value.name}</h1>
    })}
    </div>
  );
};

export default App;

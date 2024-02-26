import React, { useEffect, useState } from "react";
import Axios from "axios";

const App = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div>
      <button onClick={fetchCatFact}>Generate Cat Facts</button>
      <p>{catFact}</p>
    </div>
  );
};

export default App;

import React from "react";

const App = () => {
  // const age = 19;
  // const isGreen = true;
  // const names = ["Pedro", "Jake", "Jessica","Mike", "Dustin", "Andre"]
  const names = [
    { name: "Pedro", age: 36 },
    { name: "Lucas", age: 89 },
    { name: "Jose", age: 100 },
  ];

  return (
    <div>
      {/* {age  > 18 ? <h1>OVER AGE</h1> : <h1>ANDER AGE</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1>
      {isGreen && <button>This is a button</button>}  */}

      <h1>
        {names.map((value, key) => {
          return (
            <p key={key}>
              <User name={value.name} age={value.age} />
            </p>
          );
        })}
      </h1>
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
    </div>
  );
};

export default App;

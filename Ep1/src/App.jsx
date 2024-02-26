import React from "react";
import "./App.css";

const App = () => {
  {
  /**  
  1. In this lesson we Learning about 
   - JSX
   - COMPONENTS
   - PROPS (é um objecto javascript que armazena informacoes)
  */
  }
  return (
    <div className="title">
      <Job salary={9000} position="Senior SDE" company="Amazon" />
      <br />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <br />
      <Job salary={1000} position="Project Manager" company="Netflix" />
    </div>
  );
}; 

// Components using props to buildig
const Job = (props) => {
  return (
    <div>
      <div>
        <h1> {props.salary}</h1>
        <h1> {props.position}</h1>
        <h1> {props.company}</h1>
      </div>
    </div>
  );
};

export default App;

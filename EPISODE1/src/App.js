import './App.css';

function App() {
  return (
    <div className="App"> 
      <div>
         <User  name="Pedro" age={45} email="pedr@gmail.com"/>
         <User  name="Marcos" age={32} email="marcos@gmail.com" />
         <User  name="Marcos" age={32} email="marcos@gmail.com" />
      </div>
    </div>
  );
} 

const User = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h2> {props.age} </h2>
      <p>  {props.email} </p>
    </div>
  )
}

export default App;

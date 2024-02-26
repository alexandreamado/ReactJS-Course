import React, {useState} from 'react'

const App = () => {
  // const [age, setAge] = useState(0); 
  // const [inputValue, setInput] = useState()

  // const increaseAge = () => {
  //   setAge(age + 1)
  // }  

  // const handleInputChange = (event) => {
  //     setInput(event.target.value)
  // } 

  const [showText, setText] = useState(false); 

  return (
    <div> 
      {/* {age} <button onClick={increaseAge}>Increase Age</button>
        <br /> <br />
        <input type="text" onChange={handleInputChange}/>
        <br />
        {inputValue} */}

        <button onClick={() => {setText(!showText)}}>Show/Hide</button>
        { showText && <h1>Hi my name is Alexandre</h1>}
    </div>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(false);   
  return (
    <div className='app'>
      {/* <h1>The State Task</h1> 
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Set to Zero</button> 
      <br />
      {count} */} 

      <h2>The List</h2>
      <div className='btn'>
          <div className='btn-who'>
            <p>Quem somos nós ?</p>
            <button onClick={() => setCount(!count)}>Saiba Mais</button>
          </div>
          { count &&
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam corrupti repellendus assumenda eveniet exercitationem voluptatem! Impedit aperiam odio modi sapiente atque. Quasi voluptas eveniet illo nostrum harum impedit esse.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nihil asperiores, possimus ut quia obcaecati ea laborum expedita cupiditate explicabo similique officiis hic quo optio architecto tenetur animi consectetur. Minima?
              </p>
          }
      </div>
    </div>
  )
}

export default App

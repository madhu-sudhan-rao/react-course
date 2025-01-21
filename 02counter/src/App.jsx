import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter+1)
    setCounter(counter + 1)
    setCounter((prevCounter) => (prevCounter + 1))
    console.log('counter: ', counter);
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={incrementCounter}>Increase</button> {"   "}
    <button onClick={decrementCounter} >Decrease</button>
    <p>footer: {counter} </p>
    </>
  )
}

export default App

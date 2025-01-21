import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    // Batch Processing: React takes this as a common method and doesn't update the counter variable 2 times (or) n-times.
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // Using this React takes as the counter is updating every time, so here the counter updates n times.
    setCounter((prevCounter) => (prevCounter + 1))
    setCounter((prevCounter) => (prevCounter + 1))
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

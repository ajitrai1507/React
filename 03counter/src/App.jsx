import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0)
  
  const addValue = ()=>{
    if(counter>20) return;
    setCounter(counter++)
  }

  const subValue = ()=>{
    if(counter<1){
      alert("Value is less than 0");
      return;
      
    }
    setCounter(counter--)
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h5>Counter Value {counter}</h5>

      <button onClick={addValue}>Add Value</button>
      <button onClick={subValue}>Decrease Value</button>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Name from './components/Name'

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadunga

  const [name, setName] = useState('');

  return (
    <>
        <Name name={name} setName={setName} />
        <p>I'm inside the parent div the para is {name}</p>
    </>
  )
}

export default App

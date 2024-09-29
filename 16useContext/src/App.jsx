
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//Step1 create Context
const UserContext = createContext();

//Step2 wrap all the child inside a provider
//Step3 set value

function App() {

  const [user, setUser] = useState({name:"Ajit", age:25})
  

  return (
    <>
        <UserContext.Provider value={user}>
          <ChildA />
        </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}

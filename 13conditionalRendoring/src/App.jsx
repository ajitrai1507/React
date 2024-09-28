
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {

  const [isLoggedIn, setLogged] = useState(false)

  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn/>
  //   )
  // }else{
  //   return(
  //     <LoginBtn />
  //   )
  // }

  return(
    (isLoggedIn ? <LogoutBtn /> : <LoginBtn/>)
  )

}

export default App

import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'

function ChildC() {

    const {theme, setTheme} = useContext(ThemeContext)
    function handleClick(){
        if(theme === 'light')
            setTheme('dark')
        else
            setTheme('light')
    }
  return (
    <div>   
       <button onClick={handleClick}>Change theme</button>
    </div>
  )
}

export default ChildC
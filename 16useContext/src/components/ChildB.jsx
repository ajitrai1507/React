import React, { useContext } from 'react'
import ChildC from './ChildC'
import { UserContext } from '../App'

function ChildB() {
    const user1 = useContext(useContext)
  return (
    <div>
        
        <ChildC />
    </div>
  )
}

export default ChildB
import React from 'react'

function Name(props) {
  return (
    <div>
        {/* <h1>My name is {props.name} </h1>
        <h2>My age is {props.age}</h2> */}

        <input type="text" onChange={(e)=> props.setName(e.target.value)} />
        <p>The card value is {props.name}</p>
    </div>
  )
}

export default Name
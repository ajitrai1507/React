

function App() {
  
  const handleClick = ()=>{
    alert("I'm clicked")
  }

  const handleMouse = ()=>{
    alert("Para pe mouse aaya h")
  }

  function handleInputChange(e){
    console.log("Value till now", e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    //sustom behaviour
    alert("Form submit karna h kya")
  }

  return (
    <>

      <p onMouseOver={handleMouse}>I'm para</p>

      <button onClick={handleClick}>
        Click me
      </button>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App

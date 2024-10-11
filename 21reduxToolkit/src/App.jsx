import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./features/counter/CounterSlice";
import { useState } from "react";


function App() {

  const [amount, setAmount] = useState(0)

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  
  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleReset(){
    dispatch(reset())
  }

  return (
    <>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count} </p>
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <button onClick={handleReset}>Reset</button>

        <input 
          type="Number"
          value={amount}
          placeholder="Enter Amount"
          onChange={(e)=> setAmount(e.target.value)}
        />
      </div>
    </>
  )
}

export default App

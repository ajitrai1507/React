import React, { useEffect, useState } from 'react'

function MultiEffectComponent() {

    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect( ()=>{
        console.log('Count changed:', count);
    }, [count]);

    //side effect logic will run only when everytime count is changed

    useEffect( ()=>{
        const intervalId = setInterval( ()=>{
            setSeconds(prevSeconds => prevSeconds +1);
        },1000);
        return ()=> clearInterval(intervalId);
    }, []);

    //It will run on first appearance

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment Count</button>

        <h2>Seconds: {seconds} </h2>
    </div>
  )
}

export default MultiEffectComponent
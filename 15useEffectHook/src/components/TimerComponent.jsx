import React, { useEffect, useState } from 'react'

function TimerComponent() {

    const [seconds, setSeconds] = useState(0);

    useEffect( ()=>{
        const intervalId = setInterval( ()=>{
            setSeconds(prevSeconds => prevSeconds+1);
        },1000);

        return ()=>{
            clearInterval(intervalId);
        };
    },[])

    //It will run only on first render

  return (
    <div>
        <h1>seconds {seconds} </h1>
    </div>
  )
}

export default TimerComponent
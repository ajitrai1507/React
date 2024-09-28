import { useEffect, useState } from "react";
import LoggerComponent from "./components/LoggerComponent";
import TimerComponent from "./components/TimerComponent";
import DataFetcher from "./components/DataFetcher";
import ResizeComponent from "./components/ResizeComponent";
import MultiEffectComponent from "./components/MultiEffectComponent";

function App() {
  //Variation 1
  //Runs on every render
  // const [count, setCount] = useState(0);

  // const [total, setToatal] = useState(1)

  // const countNum = ()=>{
  //   setToatal(total+1)

  // }
  
  // const counterApp = () => {
  //   setCount(count + 1);
  // };

  // useEffect( ()=>{
  //   alert("I'm running on every render")
  // })

  // return (
  //   <>
  //     <h2>The counter value is {count}</h2>
  //     <button onClick={counterApp}>Click Me</button>
  //   </>
  // )

  //Variation 2
  //that runs on only first render

  // useEffect(() => {
  //   alert("I'm running on only first render");
  // }, []);


  //Variation 3
  // useEffect(()=>{
  //   alert("I will run count update")
  // },[count])

  //variation 4
  //multiple dependecies

  // useEffect( ()=>{
  //   alert("I will run every time")
  // }, [count, total])


  //variation 5
  //lets add cleanUp function

  // useEffect(()=>{
  //   alert("Count is updated")

  //   return ()=>{
  //     alert("Count is unmount from UI")
  //   }
  // },[count])

  return (
    <>
      {/* <h2>The counter value is {count}</h2>
      <button onClick={counterApp}>Click Me</button>

      <p>The total value is {total}</p>
      <button onClick={countNum}>Count</button> */}

      {/* <LoggerComponent /> */}

      {/* <TimerComponent /> */}

      {/* <DataFetcher /> */}

      {/* <ResizeComponent /> */}

      <MultiEffectComponent />




    </>
  );
}

export default App;

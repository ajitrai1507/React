import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="h-screen w-full duration-200 " style={{ backgroundColor: color }}>
        <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="rounded-3xl flex flex-wrap gap-3 justify-between shadow-xl px-4 py-2 bg-white">
            <button onClick={ ()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{background: "red"}}>Red</button>
            <button onClick={ ()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{background: "green"}}>Green</button>
            <button onClick={ ()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl" style={{background: "blue"}}>Blue</button>
            <button onClick={ ()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-2xl" style={{background: "yellow"}}>Yellow</button>
            <button onClick={ ()=> setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-2xl" style={{background: "white"}}>White</button>
          </div>
        </div>
    </div>
  );
}

export default App;

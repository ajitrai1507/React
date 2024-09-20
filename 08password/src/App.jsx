import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [alpha, setAlpha] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (alpha) str += "~!@#$%^&*()_,?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, alpha, setPassword]);

  const copyPasswordToClip = useCallback( ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect( ()=>{
    passwordGenerator()
  }, [length, number, alpha, passwordGenerator])

  return (
    <>
      <div className="bg-zinc-900 h-screen w-full">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-zinc-600">
          <h1 className="text-center text-white text-3xl py-8">
            Password Generator
          </h1>
          <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
            <input type="text" value={password} className="outline-none w-full py-1 px-3" readOnly placeholder="Password" ref={passwordRef} />
            <button onClick={copyPasswordToClip} className="text-white round px-3 py-1 outline-none bg-blue-700">Copy</button>
          </div>

          <div className="flex gap-x-2 text-sm">
            <div className="flex items-center gap-x-1">
              <input type="range" value={length} min={6} max={50} className="cursor-pointer" onChange={ (e)=>{setLength(e.target.value)}} />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={number} id="numberInput" onChange={()=>{
                setNumber( (prev)=> !prev);
              }} />
              <label>Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={alpha} id="charInput" onChange={()=>{
                setAlpha( (prev)=> !prev);
              }} />
              <label>Charachter</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

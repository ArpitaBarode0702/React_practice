import { useState, useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallow, setNumberallow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [password, setPassword] = useState("")
  const passwordgen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallow) str += '0123456789'
    if (charallow) str += '!@#$%^&*_+=[]{}`~'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);


    }
    setPassword(pass);
  }, [length, numberallow, charallow, setPassword])
  useEffect(()=>{
 passwordgen()
  },[length,numberallow,charallow,passwordgen])
  const copyclip=useRef(null);
  const copytoclipboard=useCallback(()=>{
    copyclip.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1> 
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={copyclip}

          />
          <button
            onClick={copytoclipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={5}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            
            }}
            />
            <label>Length:{length}</label>
            
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type='checkbox'
             defaultChecked={numberallow}
             id='inputf'
             onChange={()=>{
              setNumberallow((prev)=>!prev);
             }}
             ></input><label>Number</label>
            <input type='checkbox' defaultChecked={charallow}
             id='inputf'
             onChange={()=>{
              setCharallow((prev)=>!prev);
             }}></input><label>Character</label>


          </div>
        </div>
      </div>

    </>
  )
}

export default App

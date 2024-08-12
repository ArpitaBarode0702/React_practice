import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hooks and state is used to update or propagate variableon ui544443
  //let count=5;
  let [counter,setCounter]=useState(12);
  const addvalue=()=>{
    // console.log("value",Math.random());
    counter =counter+1;
    if(counter<=20){
    setCounter(counter);
  }
}
  const removevalue=()=>{
    if(counter>0){
    setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br/>

      <button onClick={removevalue} >Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App

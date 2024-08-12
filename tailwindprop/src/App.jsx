import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  const myobj={
    usr:'Arpita',
    age:21
  }

  return (
    
   
      <><h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1><Card myname='Arpita' visit="visit me" myobject={myobj}></Card></>//yha variable ko braces me use krege
      
      )
}

export default App

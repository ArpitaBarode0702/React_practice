import { useState } from 'react'

import UserContextProvider from './context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  
  return (
    <UserContextProvider>
      <h2>React Form</h2>
      <Login/>
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App

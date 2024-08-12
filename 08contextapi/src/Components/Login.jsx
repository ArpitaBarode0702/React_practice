import React from 'react';
import { useState,useContext } from 'react';
import UserContext from '../context/Context';

function Login() {
    const [username,setUsername]=useState('')
    const [password, setpassword] = useState('');
    const {setUser} =useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('hi');
        setUser({username},{password})

    }
  return (
    <div>
      <h1>Login</h1>
      <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='name'  />
      <input type='text' value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='password'  />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

import React from 'react';
import { useState } from 'react';
import UserContext from './Context';
  
const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider
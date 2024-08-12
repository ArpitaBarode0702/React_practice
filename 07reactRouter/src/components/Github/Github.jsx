import React from 'react';
import { useEffect,useState } from 'react';
  

function Github() {
    //const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/ArpitaBarode0702')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])

  return (
   <>
   <div className=" flex justify-center flex-col bg-slate-400 text-white">
    <p className='text-white'>Github :{data.followers}</p>
    <img className='w-40 h-40' src={data.avatar_url}></img>
   </div>
   </>
  );
}

export default Github;

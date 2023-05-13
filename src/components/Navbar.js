import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { btnstyle } from '../page/Login';

const Navbar = () => {
const [username,setUserName] =useState("")



useEffect(()=>{

const data =localStorage.getItem("user")
    setUserName(data);



},[])



    const navigate =useNavigate()
const logoutHandle =() =>{

        localStorage.removeItem("user");
        setUserName("")
        navigate("/login")


}




  return (
    <div className='bg-red-500 w-full h-24 flex items-center justify-between px-6 md:px-12 text-lg md:text-2xl'>
        <h2 className='lg:text-3xl text-lg font-semibold text-white '>M-MANIA</h2>
        <div className='flex flex-row items-center gap-3'>
         <h3 className='text-white uppercase'>   {username && username}</h3>
          <button onClick={logoutHandle} className={btnstyle}>
                log out
            </button> 
            </div> 

    </div>
  )
}

export default Navbar
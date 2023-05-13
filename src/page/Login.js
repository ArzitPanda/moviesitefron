import React, { useState } from 'react'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'

export const btnstyle ="px-6 py-2  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
const Login = () => {
    const navigate = useNavigate()



    const [data,setData] =useState("")



const loginHandle = () =>{

    localStorage.setItem("user",data)
    navigate("/")


}

  return (
   <div className='bg-dark-gray h-screen flex items-center justify-center'>
        <div className='w-full h-full  md:w-2/6 md:h-2/3 bg-red-500 flex flex-col items-center '>
            <h2 className='text-3xl font-semibold text-white my-4'>MovieMania</h2>
            <div className='w-full text-xl flex flex-col items-center justify-center bg-slate-50 flex-1 gap-4'>
                <Input className="w-2/3"  data ={{data,setData}}/>
                {data && <button className={btnstyle} onClick={loginHandle}>enter</button>}
            </div>
        </div>

   </div>
  )
}

export default Login
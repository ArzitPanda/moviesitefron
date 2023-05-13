import React, { useEffect, useRef } from 'react'
import { redirect, useNavigate,useHref } from 'react-router-dom'

const AuthProvider = ({children}) => {


    const ref= useNavigate()
  useEffect(()=>{

    const data =localStorage.getItem('user')
  console.log(data)
    if(data===null)
    {  ref("/login")
      
    }


  },[])

  return (
    <>
    {children}
    </>
  )
}

export default AuthProvider
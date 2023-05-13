import React from 'react'
import Navbar from './Navbar'
import AuthProvider from '../hooks/AuthProvider'

const LayOut = ({children}) => {
  return (
    <AuthProvider>
    <div className=" bg-dark-gray">
    <Navbar/>
    {children}
    </div>
    </AuthProvider>
  )
}

export default LayOut
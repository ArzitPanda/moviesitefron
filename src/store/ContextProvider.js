import React, { useState } from 'react'
import { createContext } from 'react'
import useMovies from '../hooks/useMovies';


export const Store = createContext();

const ContextProvider = ({children}) => {

    const movies = useMovies()
    console.log(movies)

  return (
    <Store.Provider value={{movies:movies}}>
        {children}
    </Store.Provider>
   
  )
}

export default ContextProvider
import React, { useEffect, useMemo, useState } from 'react'
import { createContext } from 'react'
import useMovies from '../hooks/useMovies';
import axios from 'axios'

export const Store = createContext();

const ContextProvider = ({children}) => {






const[movies,setMovies] =useState()
const [search,setSearch] =useState("all")

useEffect(()=>{

  const url ="https://api.tvmaze.com/search/shows?q="+search
  axios
  .get(url)
  .then((res) => {
    console.log(res);
    if(res.status===200)
    {
        setMovies({code:res.status,data:res.data})
    }
    else
    {
        setMovies({code:res.status,data:[]})
    }
  })
  .catch((err) => {
    setMovies({code:500,data:[]})
  });

},[search,setSearch])

  return (
    <Store.Provider value={{movies:movies,setMovies:setMovies,search:search,setSearch}}>
        {children}
    </Store.Provider>
   
  )
}

export default ContextProvider
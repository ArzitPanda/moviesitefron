import React, { useContext, useEffect, useState } from "react";
import LayOut from "../components/LayOut";
import useMovies from "../hooks/useMovies";
import Card from "../components/Card";
import { Store } from "../store/ContextProvider";
import Input from "../components/Input";
import {BsSearch} from "react-icons/bs"
import { btnstyle } from "./Login";
import axios from 'axios'
const Movies = () => {

const { movies,setMovies,search,setSearch} = useContext(Store);
  
const [query,setQuery] =useState("")


const handleData =() =>{
   
setSearch(query)
setQuery("");

}

  return (
    <LayOut>
        <div className=" bg-slate-200 flex flex-col items-center">
            <div className="w-11/12 rounded-2xl shadow-sm shadow-slate-100 h-20 bg-white mt-4 flex items-center justify-center gap-2 ms:gap-4 lg:gap-6 px-2">
                <BsSearch size="25"/>
            <input  type="text" className="border-0 w-10/12 outline-none " placeholder="search your movie" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
            <button className={btnstyle}
            
            onClick={handleData}
            >search</button>
            </div>
      <div className=" w-full flex items-center justify-center py-6 flex-row flex-wrap gap-6">
        {movies?.code === 200 &&
          movies?.data.map((ele) => {
            return <Card ele={ele} />;
          })}
      </div>
      </div>
    </LayOut>
  );
};

export default Movies;

import React, { useContext, useEffect, useRef } from 'react'
import LayOut from '../components/LayOut'
import { useParams } from 'react-router-dom';
import { Store } from '../store/ContextProvider';
import {BsDot} from "react-icons/bs"
import { btnstyle } from './Login';

const Summary = () => {

    const {id} =useParams()
    const numId =parseInt(id)
    const { movies } = useContext(Store);
    const summary =useRef()
    const movie = movies?.data.filter((item)=>item?.show?.id===numId)[0]
   useEffect(()=>{


    summary.current.innerHTML= movie?.show?.summary

   },[])
        

  return (
   <LayOut>
  
 <section className="bg-white dark:bg-gray-900 -z-20">
  
    <div className="container px-6 py-10 mx-auto ">
        <div className="lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={movie?.show?.image?.original} alt="" loading="lazy"/>

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p className="text-5xl font-semibold text-red-500 ">“</p>

                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl lg:w-96">
                   {movie?.show?.name}
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 " id="doc" ref={summary}>
                    
                 
                </p>

                <h3 className="mt-6 text-lg font-medium text-red-500 flex gap-2">

                {movie?.show?.genres.map((elem)=>{return (<div className='flex items-center justify-center gap-1'>
                <BsDot size={20} color='red'/>
                {' '} {elem}
            </div>)})}
                </h3>
                <p className="ml-4 text-gray-600 dark:text-gray-300 font-semibold">average rating : {movie?.show?.rating?.average || "not found"}</p>

                <div className="flex items-center  justify-between mt-12 lg:justify-start">
                   <a className={btnstyle} target='_blank' href={movie?.show?.url} rel="noreferrer">
                    watch now
                   </a>
                </div>
            </div>
        </div>
    </div>
</section>


   </LayOut>
  )
}

export default Summary
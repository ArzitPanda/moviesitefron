import React, { useContext } from 'react'
import {MdMovie} from "react-icons/md"
import {BsDot} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { Store } from '../store/ContextProvider'

const Card = ({ele}) => {





    const imgUrl =ele?.show?.image?.medium || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
    const lan =ele?.show?.language

  return (
    <Link className="sm:w-screen md:w-2/5  lg:w-1/6  max-w-sm overflow-hidden  rounded-lg shadow-lg bg-gray-800"
    
    
    to={{pathname:`/summary/${ele?.show?.id}`}} >
    <img className="object-cover object-center w-full h-4/6" src={imgUrl} alt="avatar" loading="lazy"/>

    <div className="flex items-center px-6 py-3 bg-gray-900">
        <MdMovie size= {25} color="rgb(226,232,240)"/>

        <h1 className="mx-3 text-lg font-semibold text-white">{lan}</h1>
    </div>

    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-white">{ele?.show?.name}</h1>

        <p className="py-2  text-gray-400 flex">
            {ele?.show?.genres.map((elem)=>{return (<div className='flex items-center justify-center gap-1'>
                <BsDot size={10} color='rgb(226,232,240)'/>
                {' '} {elem}
            </div>)})}
        </p>

        <div className="flex items-center mt-4 text-gray-200">
            <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 11H10V13H14V11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
            </svg>

            <h1 className="px-2 text-sm">
                {ele?.show?.premiered|| "not present" } 
            </h1>
        </div>

       
    </div>
</Link>
  )
}

export default Card
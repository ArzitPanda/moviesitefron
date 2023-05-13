import React from 'react'

const Input = (props) => {
const {data,setData} =props.data

  return (
    <div {...props} >
    <label for="username" className="block text-sm text-gray-500 dark:text-gray-300">Username</label>

    <input type="text" placeholder="enter you name to login"
    
    
    onChange={(e)=>{
        e.preventDefault()
        setData(e.target.value)



    }}
    className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300" />
</div>
  )
}

export default Input
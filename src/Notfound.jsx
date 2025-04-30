import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className='flex flex-col items-center justify-center sm:gap-15 gap-10 my-20'>
        <h1 className='sm:text-9xl  text-5xl text-center font-semibold'>404 Not Found</h1>
        <p className='sm:text-xl '>Your visited page not found. You may go home page.</p>
        <button type="button" className='bg-black text-white sm:px-16 px-8 sm:py-3 py-2 rounded sm:text-xl hover:bg-white hover:text-black transition-all hover:border-black border-1'
        onClick={()=>navigate("/")}
        >
            Back to Home Page 
            </button>
      </div>
    </>
  )
}

export default Notfound

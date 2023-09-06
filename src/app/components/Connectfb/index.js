import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Connectfb = () => {
  const navigate = useNavigate();
const handleconnect = ()=>{
navigate('/replydisconnect')
}
  return (
    <>
            <div className='bg-blue-800 w-full flex justify-center items-center h-full'>
      <div className='bg-white rounded-2xl pt-9 pb-7 px-9 w-[29%] flex items-center flex-col gap-y-10 '>
        <div><p className='font-bold text-lg'>Facebook Page integration</p></div>
        
          <button
            className={` border-bgblue border-2 w-full py-[10px] border-border rounded-lg font-bold text-white bg-blue-900 px-32
              }`}
              onClick={handleconnect}
           
          >
            Connect Page
          </button>
       
      </div>
    </div>
    </>
  )
}

export default Connectfb
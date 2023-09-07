import React from 'react'

const InputSectiontextarea = () => {
  return (
    <>
      <div className="w-[100%] h-14 px-7 relative ">
        <textarea className="resize-none w-[100%] h-12 py-[10px] px-6  text-base outline-0 border-2 border-blue-800 rounded-md"
          placeholder="Write your message">
        </textarea>
        <div className="absolute flex gap-x-3 right-14 items-center justify-center top-[7px]">

          <button className="w-20 h-8 text-base flex items-center justify-center bg-blue-700 rounded-md text-white cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </>
  )
}

export default InputSectiontextarea
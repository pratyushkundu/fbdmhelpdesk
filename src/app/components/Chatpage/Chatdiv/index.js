import React from 'react'
import InputSectiontextarea from './InputSectiontextarea'
import ChatSection from './Chatsection'

const ChatWindowBox = () => {
  return (
    <>
      <div className='w-full bg-white flex justify-between items-center px-4 py-[17px] border-[1px] border-opacity-[0.3] border-bggrey'>
        <div className='px-4'><p className='font-bold text-xl '>Amit RG</p></div>
      </div>
      <div className="w-full h-[90vh] bg-bggreylight pt-4">
        {/* Chat Messages Display */}
        <ChatSection />

        {/* Text Box */}
        <InputSectiontextarea />
      </div>


    </>
  )
}

export default ChatWindowBox
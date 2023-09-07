import React from 'react';
import MsgInbox from './MsgInboxdiv/MsgInbox';
import ChatWindowBox from './Chatdiv';
import UserInfo from './UserInfodiv';
import Leftnav from './LeftNavdiv';

const Chatpage = () => {

  return (
    <>
      <div className='w-full flex'>
        <div className='leftnavdiv w-[5%] bg-blue-900 h-screen relative  py-6'>
         <Leftnav/>
        </div>
        <div className='MsgInboxdiv w-[20%] bg-white'>
          <MsgInbox />
        </div>
        <div className='Chatdiv w-[52%] h-screen bg-bggreylight flex flex-col border-[1px] border-opacity-[0.3] border-bggrey'>
          <ChatWindowBox />
        </div>
        <div className='Userinfodiv w-[23%] bg-bggreylight'>
          <UserInfo />
        </div>
      </div>
    </>
  )
}

export default Chatpage
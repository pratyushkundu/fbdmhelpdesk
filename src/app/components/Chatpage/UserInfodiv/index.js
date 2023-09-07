import React from 'react'
import { PhoneCall, User } from '@phosphor-icons/react'
import senderImg from '../../../../assets/images/chatwindow/Avatar1.svg';

const UserInfo = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-y-2 pt-12 pb-10  border-[1px] border-b-2 border-opacity-[0.3] border-bggrey bg-white'>
                <div className='w-22 h-22 cursor-pointer'><img src={senderImg} className='w-16 h-16' /></div>
                <div><p className='font-bold text-xl cursor-pointer'>Amit RG</p></div>
                <div className='flex items-center gap-x-[7px]'>
                    <div className='rounded-full bg-[#000] opacity-[0.5] w-2 h-2'></div>
                    <p className='font-semibold opacity-[0.4] text-sm mt-[-3px] cursor-pointer'>Offline</p>
                </div>
                <div className='flex gap-x-2 mt-2'>
                    <div className='rounded-md border-[1px] w-20 border-[#000] cursor-pointer border-opacity-[0.3] py-[3px] flex items-center justify-center gap-x-[6px]'>
                        <PhoneCall size={18} />
                        <p className='font-bold opacity-[0.6] '>Call</p>
                    </div>
                    <div className='rounded-md border-[1px] w-24 border-[#000] cursor-pointer border-opacity-[0.3] py-[3px] flex items-center justify-center gap-x-[6px]'>
                        <User size={18} />
                        <p className='font-bold opacity-[0.6] '>Profile</p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col gap-y-1 p-4 rounded-lg bg-white mx-5 mt-5 border-[1px] border-opacity-[0.3] border-bggrey'>
                <div><p className='font-bold text-lg mb-1 opacity-[0.6]'>Customer Details</p></div>
                <div className='flex justify-between'>
                    <p className='font-semibold text-base text-[#000] opacity-[0.5]'>Email</p>
                    <p className='font-semibold text-base'>amit@richpanel.com</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-semibold text-base text-[#000] opacity-[0.5]'>FirstName</p>
                    <p className='font-semibold text-base'>Amit</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-semibold text-base text-[#000] opacity-[0.5]'>LastName</p>
                    <p className='font-semibold text-base'>RG</p>
                </div>
                <div className='text-blue-700 opacity-[0.7] font-bold text-base mt-2 cursor-pointer'>View more details</div>
            </div>
        </>
    )
}

export default UserInfo
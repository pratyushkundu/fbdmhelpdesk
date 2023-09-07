import React from 'react';
import { ArrowClockwise, List } from '@phosphor-icons/react'
import { useState } from 'react';

const messageGroups = [
    {
        username: "Amit RG",
        time: "10m",
        platform: "Facebook DM",
        messages: [
            { title: "Awesome Product", description: "Hey there! Nice product marketing statergy and business meetings" },
        ],
    },
    {
        username: "Hiten Saxena",
        time: "16m",
        platform: "Facebook DM",
        messages: [
            { title: "QA testing", description: "Hey there! Nice product marketing statergy and business meetings" },
        ],
    },
];


function truncateCharacters(text, limit) {
    if (text.length > limit) {
        return text.slice(0, limit) + '...';
    }
    return text;
}

const MsgInbox = () => {
    const [activeMsg, setActiveMsg] = useState(0);

    return (
        <>
            <div className='w-full h-16  flex justify-between items-center px-4 py-3 border-[1px] border-opacity-[0.3] border-bggrey'>
                <div className='flex gap-x-4 items-center'>
                    <List size={20} color="#000" className='mt-1 cursor-pointer opacity-[0.7]' />
                    <p className='font-bold text-xl'>Conversations</p>
                </div>
                <ArrowClockwise size={23} color="#000" className='pt-1 cursor-pointer opacity-[0.7]' />
            </div>
            <div className='flex flex-col'>
                <div>
                    {messageGroups.map((group, index) => (
                        <div key={index}
                            className={`py-5 cursor-pointer ${activeMsg === index ? "bg-bggreylight" : ""}`}
                            onClick={() => setActiveMsg(index)}>
                            <div className="flex justify-between px-5 mb-4">
                                <div className="flex gap-x-5 items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 border-[1px] border-opacity-[0.4] border-bggrey rounded-lg outline-0 "
                                    />
                                    <div className='flex flex-col '>
                                        <p className='font-bold text-base opacity-[0.8]'>{group.username}</p>
                                        <p className='font-bold text-sm opacity-[0.6]'>{group.platform}</p>
                                    </div>
                                </div>
                                <div><p className='font-bold text-base opacity-[0.7] mt-[-2px]'>{group.time}</p></div>
                            </div>
                            <div className='flex flex-col gap-y-4 px-4'>
                                {group.messages.map((msg, index) => (
                                    <div key={index} className='flex flex-col'>
                                        <p className='text-sm font-bold truncate opacity-[0.8]'>{truncateCharacters(msg.title, 20)}</p>
                                        <p className='text-sm font-bold truncate opacity-[0.6]'>
                                            {truncateCharacters(msg.description, 30)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MsgInbox
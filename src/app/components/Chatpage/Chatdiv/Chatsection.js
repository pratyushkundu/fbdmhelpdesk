import React from 'react'
import { messages } from './Messagesarr'
import senderImg from '../../../../assets/images/chatwindow/Avatar1.svg';
import recieverImg from '../../../../assets/images/chatwindow/Avatar2.svg'
const ChatSection = () => {
    return (
        <>
            <div className="chat w-[100%] h-[90%] px-7 flex flex-col gap-y-14 overflow-y-auto max-h-[calc(100vh - 50px)] ">
                {messages.map((messageGroup, index) => (
                    <div key={index} className={`chatrow-${messageGroup.type} w-full flex flex-col gap-y-3`}>
                        {messageGroup.messages.map((message, subIndex) => (
                            <React.Fragment key={subIndex}>
                                <div className={`${messageGroup.type} flex gap-x-4 ${messageGroup.type === 'receiver' ? 'flex-row-reverse items-center' : 'items-center'}`}>
                                    <div className="pt-1" style={{ width: '40px', visibility: subIndex === messageGroup.messages.length - 1 ? 'visible' : 'hidden' }}>
                                        <img src={messageGroup.type === 'sender' ? senderImg : recieverImg} />
                                    </div>
                                    <div className={`relative w-auto h-[42px] py-[10px] pr-14 rounded-xl ${messageGroup.type === 'sender' ? 'pl-4 bg-white text-[#000] opacity-[0.8] font-semibold' : 'pl-3 bg-white text-[#000] opacity-[0.8] font-semibold'}`}>
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                </div>
                                <div className="pb-4">
                                    <p className={`text-paragraph text-xs font-semibold ${messageGroup.type === 'receiver' ? 'flex flex-row-reverse pr-12' : 'pl-16 '}`}>
                                        {message.timestamp}
                                    </p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>

        </>
    )
}

export default ChatSection
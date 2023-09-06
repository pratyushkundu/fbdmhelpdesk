import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReplyConnectorDisconnect = () => {
    const navigate = useNavigate();
    const handledelete = ()=>{
        navigate('/')
    }
    const handlemessage = ()=>{
        navigate('/chatpage')
    }
    return (
        <>
     <div className='bg-blue-800 w-full flex justify-center items-center h-full'>
            <div className='bg-white rounded-2xl pt-9 pb-7 px-5 w-[29%] flex items-center flex-col gap-y-[6px] '>

                <div><p className='font-bold text-xl'>Facebook Page Integration</p></div>
                <div><p className='font-semibold text-xl mb-8'>Integrated Page: <span className='font-bold'>Amazon Business</span></p></div>
                <a
                    target="_blank"
                    className='mb-3'>
                    <button

                        className={` border-bgblue border-2 w-full py-3 border-border rounded-lg font-bold text-white bg-red-500 px-[100px] }`}
                        onClick={handledelete}
                    >
                        Delete integration
                    </button>
                </a>
                <a
                    target="_blank"
                >
                    <button
                        className={` border-bgblue border-2 w-full py-3 border-border rounded-lg font-bold text-white bg-blue-900 px-[100px] 
                                }`}
                                onClick={handlemessage}
                    >
                        Reply To Messages
                    </button>
                </a>
            </div>
</div>
        </>
    )
}

export default ReplyConnectorDisconnect
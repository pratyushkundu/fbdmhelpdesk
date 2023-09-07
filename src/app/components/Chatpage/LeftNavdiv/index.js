import React from 'react'
import IconList from './Iconlist'
import senderImg from '../../../../assets/images/chatwindow/Avatar1.svg';

const Leftnav = () => {
    return (
        <>
            <IconList />
            <div className='absolute bottom-6 px-[30%]'>
                <img src={senderImg} />
            </div>
        </>
    )
}

export default Leftnav
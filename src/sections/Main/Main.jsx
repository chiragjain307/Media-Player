import React from 'react'
import ICON from '../../assets/media-player.png'

function Main() {
    return (
        <main style={{ height: "calc(100vh - 6.5rem)" }} className=' bg-black flex justify-center items-center'>
            <img src={ICON} alt=""  className='h-20 absolute'/>

        </main>
    )
}

export default Main
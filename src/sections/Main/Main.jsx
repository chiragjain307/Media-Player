import React from 'react'
import ICON from '../../assets/media-player.png'

function Main({ videoSrc }) {
    return (
        <main style={{ height: "calc(100vh - 6.5rem)" }} className=' bg-black flex justify-center items-center overflow-y-scroll'>
            {videoSrc ? (
                <video src={videoSrc} controls className=' h-full z-0' />
            ) : (
                <img src={ICON} alt=""  className='h-20 absolute'/>
            )}
        </main>
    );
}

export default Main

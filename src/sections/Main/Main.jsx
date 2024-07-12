import React, { useRef } from 'react'
import ICON from '../../assets/media-player.png'

function Main({ mediaSrc, mediaType, mediaRef, mainRef }) {
    // const mediaRef = useRef(null)
    return (
        <main style={{ height: "calc(100vh - 6.5rem)", minHeight: "90px" }} className='bg-black flex justify-center items-center overflow-y-scroll' ref={mainRef}>
            {mediaSrc ? (
                mediaType === 'video' ? (
                    <video ref={mediaRef} src={mediaSrc} controls className='h-full z-0' />
                ) :
                    mediaType === 'image' ? (
                        <img src={mediaSrc} alt="Uploaded Media" className='h-full z-0' />
                    ) :
                        mediaType === 'audio' ? (
                            <audio ref={mediaRef} src={mediaSrc} controls className='z-0' />
                        ) : null
            ) : (
                <img src={ICON} alt="" className='h-20 absolute' />
            )}
        </main>
    );
}

export default Main

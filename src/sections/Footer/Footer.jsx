import React, {useState} from 'react';
import { FaBackward, FaPlay,FaPause, FaForward, FaVolumeUp, FaExpand } from 'react-icons/fa';

function Footer({mediaType, mediaRef}) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (mediaRef.current) {
            if (isPlaying) {
                mediaRef.current.pause();
            } else {
                mediaRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // console.log(mediaType, mediaRef)
    return (
        <footer className='bg-gray-400 h-12 flex items-center justify-around px-3'>

            <div className={`flex ${mediaType === null || mediaType === 'image' ? 'pointer-events-none' : null}`}>
                <button className=' border-2 p-1 pointer-events-none	'><FaBackward /></button>
                <button className='border-2 p-1' onClick={handlePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className=' border-2 p-1'><FaForward /></button>
                {/* <button className=' border-2 p-1'><FaBars /></button> */}
                <input type="range" name="" id=""  className='' />
            </div>

            <div className='flex-grow'></div> {/* Spacer */}

            <div className='flex gap-2'>
                <span>{mediaRef.current ? mediaRef.current.currentTime : "00:00"}</span>
                <button><FaVolumeUp /></button>
                <button><FaExpand /></button>
            </div>
        
        </footer>
    );
}

export default Footer;

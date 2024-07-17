import React, { useEffect, useState } from 'react';
import { FaBackward, FaPlay, FaPause, FaForward, FaVolumeUp, FaExpand } from 'react-icons/fa';

function Footer({ mediaType, mediaRef, mainRef }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // for showing current value
    const [show, setShow] = useState(false)
    const [showValue, setShowValue] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            if (mediaRef.current) {
                setCurrentTime(mediaRef.current.currentTime);
                setDuration(mediaRef.current.duration);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [mediaRef]);

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

    const handleFullScreen = () => {
        if (mediaType) {
            mainRef.current.requestFullscreen();
        }
    };

    const handleSliderChange = (e) => {
        const newTime = e.target.value;
        if (mediaRef.current) {
            mediaRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // for showing current value
    const showValues = (value) => {
        setShowValue(value)
        setShow(true)
        setTimeout(() => {
            setShow(false)
            setShowValue(null)
        }, 2000)
    }

    const handleBackwardSeek = () =>{
        if (mediaRef.current) {
            const currentPlayTime = Math.round(mediaRef.current.currentTime) - 5
            mediaRef.current.currentTime = currentPlayTime
            showValues("<< 5s")
        }
    }

    const handleForwardSeek = () =>{
        if (mediaRef.current) {
            const currentPlayTime = Math.round(mediaRef.current.currentTime) + 5
            mediaRef.current.currentTime = currentPlayTime
            showValues(">> 5s")
        }
    }

    return (
        <footer className='bg-gray-400 h-12 flex items-center justify-around px-3 gap-2'>
            {show && <span className=' backdrop-blur-sm z-40 text-2xl text-white absolute right-3 top-16'>{showValue}</span>}
            <div className={`flex w-full items-center ${mediaType === null || mediaType === 'image' ? 'pointer-events-none' : ''}`}>
                <button className='border-2 p-1' onClick={handleBackwardSeek}><FaBackward /></button>
                <button className='border-2 p-1' onClick={handlePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className='border-2 p-1' onClick={handleForwardSeek}><FaForward /></button>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSliderChange}
                    className='range ml-2 w-[90%] appearance-none h-5 rounded-xl'
                />
            </div>

            <div className={`flex gap-2 w-40 ${mediaType === null ? 'pointer-events-none' : ''}`}>
                <span className='w-11 text-right'>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
                <button><FaVolumeUp /></button>
                <button onClick={handleFullScreen}><FaExpand /></button>
            </div>
        </footer>
    );
}

export default Footer;

import React, { useEffect, useState } from 'react';
import { FaBackward, FaPlay, FaPause, FaForward, FaVolumeUp, FaExpand } from 'react-icons/fa';

function Footer({ mediaType, mediaRef, mainRef }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            if (mediaRef.current) {
                setCurrentTime(mediaRef.current.currentTime);
                setDuration(mediaRef.current.duration);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [mediaRef]);

    return (
        <footer className='bg-gray-400 h-12 flex items-center justify-around px-3'>
            <div className={`flex ${mediaType === null || mediaType === 'image' ? 'pointer-events-none' : ''}`}>
                <button className='border-2 p-1 pointer-events-none'><FaBackward /></button>
                <button className='border-2 p-1' onClick={handlePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className='border-2 p-1'><FaForward /></button>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSliderChange}
                    className='ml-2'
                />
            </div>

            <div className='flex-grow'></div> {/* Spacer */}

            <div className={`flex gap-2 ${mediaType === null ? 'pointer-events-none' : ''}`}>
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
                <button><FaVolumeUp /></button>
                <button onClick={handleFullScreen}><FaExpand /></button>
            </div>
        </footer>
    );
}

export default Footer;

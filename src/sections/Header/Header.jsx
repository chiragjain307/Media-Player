import React, { useRef, useState } from 'react';
import ICON from '../../assets/media-player.png';

function Header({ setMediaSrc, setMediaType, mediaRef }) {
    const [open, setOpen] = useState(false);
    const [buttonName, setButtonName] = useState(null);
    const fileInputRef = useRef(null)
    // console.log(fileInputRef.current)

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const fileType = file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : file.type.startsWith('audio/') ? 'audio' : null;

        if (fileType) {
            const link = URL.createObjectURL(file);
            setMediaSrc(link);
            setMediaType(fileType);
        } else {
            alert('File type not supported!');
        }

        setOpen(false);
    };

    const handelSpeedUp = () => {
        console.log('speed Up')
        if (setMediaType === null || setMediaType === 'image') {
            return;
        }
        else {
            if (mediaRef.current.playbackRate = 2) {
                return;
            }
            else {
                const speed = mediaRef.current.playbackRate + 0.5
                mediaRef.current.playbackRate = speed
            }
        }
    }
    const handelSpeedDown = () => {
        console.log('speed Down')
        if (setMediaType === null || setMediaType === 'image') {
            return;
        }
        else if (mediaRef.current.playbackRate > 0) {

            const speed = mediaRef.current.playbackRate - 0.5
            mediaRef.current.playbackRate = speed

        }
    }
    const handelVolumeUp = () => {
        console.log('volume Up')
        if (setMediaType === null || setMediaType === 'image') {
            return;
        }
        else {
            if (mediaRef.current.volume = 1) {
                return;
            }
            else {
                const volume = mediaRef.current.volume + 0.1
                mediaRef.current.volume = volume
                console.log(mediaRef.current.volume)
            }
        }
    }
    const handelVolumeDown = () => {
        console.log('volume Up')
        if (setMediaType === null || setMediaType === 'image') {
            return;
        }
        else {
            if (mediaRef.current.volume = 0) {
                return;
            }
            else {
                const volume = mediaRef.current.volume - 0.1
                mediaRef.current.volume = volume
                console.log(mediaRef.current.volume)
            }
        }
    }

    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //     setVideoSrc(reader.result);
    // };

    return (
        <header className='h-14 bg-gray-400 '>
            <div className='flex ml-4 h-1/2 gap-4 items-center '>
                <img src={ICON} alt="icon" className='h-6' />
                <h1>Media Player</h1>
            </div>
            <div className='flex ml-4 h-1/2 items-center'>
                <div className='h-full'>
                    <button
                        onClick={() => fileInputRef.current.click()}
                        className='h-full hover:bg-gray-300 px-2'
                    >Open
                        <input
                            ref={fileInputRef}
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </button>
                </div>
                <div className='h-full'>
                    <button
                        onClick={() => {
                            open ? setButtonName(null) :
                                setButtonName('Playback')
                            setOpen(!open)
                        }}
                        onMouseEnter={() => open && setButtonName('Playback')}
                        className={`h-full hover:bg-gray-300 px-2 ${buttonName === 'Playback' && 'bg-gray-300'}`}
                    >Playback</button>
                    {open && buttonName === 'Playback' && (
                        <ul
                            className='absolute bg-gray-200 top-14 left-16 rounded-sm z-10 hover:cursor-pointer '>
                            <li className='p-2 w-full hover:bg-gray-300 text-center' onClick={handelSpeedUp}>Speed Up</li>
                            <li className='p-2 hover:bg-gray-300 text-center' onClick={handelSpeedDown}>Speed Down</li>
                        </ul>
                    )}
                </div>
                <div className='h-full'>
                    <button
                        onClick={() => {
                            open ? setButtonName(null) :
                                setButtonName('Audio')
                            setOpen(!open)
                        }}
                        onMouseEnter={() => open && setButtonName('Audio')}

                        className={`h-full hover:bg-gray-300 px-2 ${buttonName === 'Audio' && 'bg-gray-300'}`}
                    >Audio</button>
                    {open && buttonName === 'Audio' && (
                        <ul
                            className='absolute bg-gray-200 top-14 left-32 rounded-sm z-10 hover:cursor-pointer'>
                            <li className='p-2 w-full hover:bg-gray-300 text-center' onClick={handelVolumeUp}>Speed Up</li>
                            <li className='p-2 hover:bg-gray-300 text-center' onClick={handelVolumeDown}>Speed Down</li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;

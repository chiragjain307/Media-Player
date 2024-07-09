import React, { useState } from 'react';
import ICON from '../../assets/media-player.png';

function Header({ setVideoSrc }) {
    const [open, setOpen] = useState(false);
    const [buttonName, setButtonName] = useState(null);

    const handleOpenFileClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // console.log(file)
        const link = URL.createObjectURL(file)
        setVideoSrc(link)
        setOpen(false)
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //     setVideoSrc(reader.result);
        // };
    };

    return (
        <header className='h-14 bg-gray-400 '>
            <div className='flex ml-4 h-1/2 gap-4 items-center '>
                <img src={ICON} alt="icon" className='h-6' />
                <h1>Media Player</h1>
            </div>
            <div className='flex gap-4 ml-4 h-1/2 items-center'>
                <div className='h-full'>
                    <button
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setButtonName('Open')}
                        className='h-full'
                    >Open</button>
                    {open && buttonName === 'Open' && (
                        <ul
                            onMouseEnter={() => setButtonName('Open')}
                            className='absolute bg-gray-200 top-14 rounded-sm z-10 '>
                            <li
                                className='p-2 w-full hover:bg-gray-300 text-center cursor-pointer'
                                onClick={handleOpenFileClick}
                            >
                                Open File
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    // onChange={(e)=>console.log(e)
                                    onChange={handleFileChange}
                                />
                            </li>
                            <li className='p-2 hover:bg-gray-300 text-center'>Speed Down</li>
                        </ul>
                    )}
                </div>
                <div className='h-full'>
                    <button
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setButtonName('Playback')}
                        className='h-full'
                    >Playback</button>
                    {open && buttonName === 'Playback' && (
                        <ul
                            onMouseEnter={() => setButtonName('Playback')}
                            className='absolute bg-gray-200 top-14 rounded-sm z-10 '>
                            <li className='p-2 w-full hover:bg-gray-300 text-center'>Speed Up</li>
                            <li className='p-2 hover:bg-gray-300 text-center'>Speed Down</li>
                        </ul>
                    )}
                </div>
                <div className='h-full'>
                    <button
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setButtonName('Audio')}
                        className='h-full'
                    >Audio</button>
                    {open && buttonName === 'Audio' && (
                        <ul
                            onMouseEnter={() => setButtonName('Audio')}
                            className='absolute bg-gray-200 top-14 rounded-sm z-10 '>
                            <li className='p-2 w-full hover:bg-gray-300 text-center'>Speed Up</li>
                            <li className='p-2 hover:bg-gray-300 text-center'>Speed Down</li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;

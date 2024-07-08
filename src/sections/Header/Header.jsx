import React, { useState } from 'react'
import ICON from '../../assets/media-player.png'
function Header() {
    const [open, setOpen] = useState(false)
    const [buttonName, setButtonName] = useState(null)

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
                        // onMouseLeave={() => setButtonName(null)}
                        className='h-full'
                    >Open</button>
                    {open && buttonName === 'Open' && (
                        <ul
                            onMouseEnter={() => setButtonName('Open')}
                            // onMouseLeave={() => setButtonName(null)}
                            className='absolute bg-gray-200 top-14'>
                            <li>Speed Up</li>
                            <li>Speed Down</li>
                        </ul>
                    )}
                </div>
                <div className='h-full'>
                    <button
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setButtonName('Playback')}
                        // onMouseLeave={() => setButtonName(null)}
                        className='h-full'
                    >Playback</button>
                    {open && buttonName === 'Playback' && (
                        <ul
                            onMouseEnter={() => setButtonName('Playback')}
                            // onMouseLeave={() => setButtonName(null)}
                            className='absolute bg-gray-200 top-14'>
                            <li>Speed Up</li>
                            <li>Speed Down</li>
                        </ul>
                    )}
                </div>
                <div className='h-full'>
                    <button
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setButtonName('Audio')}
                        // onMouseLeave={() => setButtonName(null)}
                        className='h-full'
                    >Audio</button>
                    {open && buttonName === 'Audio' && (
                        <ul
                            onMouseEnter={() => setButtonName('Audio')}
                            // onMouseLeave={() => setButtonName(null)}
                            className='absolute bg-gray-200 top-14'>
                            <li>Speed Up</li>
                            <li>Speed Down</li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
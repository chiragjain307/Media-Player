import React, { useState } from 'react'
import ICON from '../../assets/media-player.png'
function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className='h-14 bg-gray-400 '>
            <div className='flex ml-4 h-1/2 gap-4 items-center '>
                <img src={ICON} alt="icon" className='h-6' />
                <h1>Media Player</h1>
            </div>
            <div className='flex gap-4 ml-4 h-1/2 items-center'>
                <div>
                    <button onClick={() => setOpen(!open)}>Open</button>
                    {open && (
                        <ul className=' absolute bg-gray-200 top-14'>
                            <li>Speed Up</li>
                            <li>Speed Down</li>
                        </ul>
                    )}
                </div>
                <div>
                    <button>Playback</button>
                    <ul className=' absolute bg-gray-200 top-14'>
                        <li>Speed Up</li>
                        <li>Speed Down</li>
                    </ul>
                </div>
                <div>
                    <button>Audio</button>
                    <ul className=' absolute bg-gray-200 top-14'>
                        <li>Speed Up</li>
                        <li>Speed Down</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
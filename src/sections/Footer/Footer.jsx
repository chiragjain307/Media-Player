import React from 'react';
import { FaBackward, FaPlay, FaForward, FaVolumeUp, FaExpand } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='bg-gray-400 h-12 flex items-center justify-around px-3'>

            <div className='flex'>
                <button className=' border-2 p-1'><FaBackward /></button>
                <button className=' border-2 p-1'><FaPlay /></button>
                <button className=' border-2 p-1'><FaForward /></button>
                {/* <button className=' border-2 p-1'><FaBars /></button> */}
                <input type="range" name="" id=""  className='' />
            </div>

            <div className='flex-grow'></div> {/* Spacer */}

            <div className='flex gap-2'>
                <span>00:00</span>
                <button><FaVolumeUp /></button>
                <button><FaExpand /></button>
            </div>
        
        </footer>
    );
}

export default Footer;

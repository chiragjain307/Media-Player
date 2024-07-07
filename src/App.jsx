import { useState } from 'react'
import ICON from './assets/media-player.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='flex '>
          <img src={ICON} alt="icon" className='h-6' />
          <h1>Media Player</h1>
        </div>
        <div className='flex gap-1'>
          <div>
            Open
          </div>
          <div>
            Playback
          </div>
          <div>
            Audio
          </div>
        </div>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

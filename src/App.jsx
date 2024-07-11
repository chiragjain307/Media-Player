import React, { useRef, useState } from 'react'
import Header from './sections/Header/Header'
import Main from './sections/Main/Main'
import Footer from './sections/Footer/Footer'

function App() {
  const [mediaSrc, setMediaSrc] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const mediaRef = useRef(null)

  return (
    <>
      <Header setMediaSrc={setMediaSrc} setMediaType={setMediaType} mediaRef={mediaRef}/>
      <Main mediaSrc={mediaSrc} mediaType={mediaType} mediaRef={mediaRef} />
      <Footer mediaType={mediaType} mediaRef={mediaRef}/>
    </>
  );
}

export default App


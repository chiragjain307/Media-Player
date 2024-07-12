import React, { useRef, useState } from 'react'
import Header from './sections/Header/Header'
import Main from './sections/Main/Main'
import Footer from './sections/Footer/Footer'
import { Analytics } from '@vercel/analytics/react';



function App() {
  const [mediaSrc, setMediaSrc] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const mediaRef = useRef(null)
  const mainRef = useRef(null)

  return (
    <>
      <Header setMediaSrc={setMediaSrc} mediaType={mediaType} setMediaType={setMediaType} mediaRef={mediaRef} />
      <Main mainRef={mainRef} mediaSrc={mediaSrc} mediaType={mediaType} mediaRef={mediaRef} />
      <Footer mediaType={mediaType} mediaRef={mediaRef} mainRef={mainRef} />
      <Analytics />
    </>
  );
}

export default App


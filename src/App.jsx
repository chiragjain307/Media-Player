import React, { useRef, useState } from 'react'
import Header from './sections/Header/Header'
import Main from './sections/Main/Main'
import Footer from './sections/Footer/Footer'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';



function App() {
  const [mediaSrc, setMediaSrc] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const mediaRef = useRef(null)

  return (
    <>
      <Header setMediaSrc={setMediaSrc} mediaType={mediaType} setMediaType={setMediaType} mediaRef={mediaRef} />
      <Main mediaSrc={mediaSrc} mediaType={mediaType} mediaRef={mediaRef} />
      <Footer mediaType={mediaType} mediaRef={mediaRef} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App


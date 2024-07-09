import React, { useState } from 'react'
import Header from './sections/Header/Header'
import Main from './sections/Main/Main'
import Footer from './sections/Footer/Footer'

function App() {
  const [mediaSrc, setMediaSrc] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  return (
    <>
      <Header setMediaSrc={setMediaSrc} setMediaType={setMediaType} />
      <Main mediaSrc={mediaSrc} mediaType={mediaType} />
      <Footer />
    </>
  );
}

export default App


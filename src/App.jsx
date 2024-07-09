import React, {useState} from 'react'
import Header from './sections/Header/Header'
import Main from './sections/Main/Main'
import Footer from './sections/Footer/Footer'


function App() {
  const [videoSrc, setVideoSrc] = useState(null);

  return (
    <>
      <Header setVideoSrc={setVideoSrc} />
      <Main videoSrc={videoSrc} />
      <Footer />
    </>
  );
}

export default App


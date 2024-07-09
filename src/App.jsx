import React, {useState} from 'react'
import Header from './sections/Header/Header'
import Main from './sections/Main/Main'
import Footer from './sections/Footer/Footer'


function App() {
  const [videoSrc, setVideoSrc] = useState(null);
  // console.log(videoSrc)

  return (
    <>
      <Header setVideoSrc={setVideoSrc} />
      <Main videoSrc={videoSrc} />
      <Footer />
    </>
  );
}

export default App


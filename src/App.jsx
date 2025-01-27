import { useRef, useEffect, useState } from 'react'

import './App.css'

function App() {
  const [bgLoaded, setBgLoaded] = useState(false)

  const audioRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    videoRef.current.playbackRate = 2;
  }, [])


  const handleVideoEnd = () => {
    audioRef.current.play();
    setBgLoaded(true)
  };


  return (
    <>
      <audio id="myAudio" loop="true" ref={audioRef}>
        <source src="/letsgoriceniggas.m4a" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className='static-bg' />
      <video autoPlay muted id="bgVideo" ref={videoRef} onEnded={handleVideoEnd}>
        <source src="/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='wrapper'>
        <header className={'header ' + (bgLoaded ? 'loaded' : '')}>
          <a href="#" className='social-link'>
            X
          </a>
          <a href="#" className='social-link'>
            Telegram
          </a>
          <a href="#" className='social-link'>
            Dextools
          </a>
          <a href="#" className='social-link'>
            Dexscreener
          </a>
          <a href="#" className='social-link'>
            Raydium
          </a>
        </header>
      </div>
    </>
  )
}

export default App

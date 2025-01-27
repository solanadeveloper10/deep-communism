import { useRef, useEffect, useState } from 'react'

import Contract from './Contract';

const Content = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [bgLoaded, setBgLoaded] = useState(false);

  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  }, [])

  const handleVideoEnd = () => {
    setBgLoaded(true)
  };

  return <>
    <audio loop={true} ref={audioRef}>
      <source src="/letsgoriceniggas.m4a" type="audio/mp4" />
      Your browser does not support the audio element.
    </audio>
    <div className='static-bg' />
    {windowWidth > 768 ? <video autoPlay muted id="bgVideo" onEnded={handleVideoEnd}>
      <source src="/bg_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      : null}
    <div className='wrapper'>
      <header className={'header ' + ((bgLoaded || windowWidth <= 768) ? 'loaded' : '')}>
        <a href="https://x.com/DeepCommunizm" target='_blank' className='social-link'>
          X
        </a>
        <a href="https://t.me/DeepCommunizm" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/FeB9v9sio2oVRwCjFSyPti4PenYK7cAPoq1dYY97cLAv?t=1737997474072" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/FgkbcKNeSJtQGZ4WEweRWh8kSveoJvszdbX9CKMdeep" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=FgkbcKNeSJtQGZ4WEweRWh8kSveoJvszdbX9CKMdeep" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <Contract bgLoaded={bgLoaded || windowWidth <= 768} />
    </div>
  </>
}

export default Content

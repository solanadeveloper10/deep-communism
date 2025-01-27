import { useState } from 'react'

import Content from './Content'

import './App.css'

function App() {
  const [playBtnClicked, setPlayBtnClicked] = useState(false)

  return (
    <div className='general-wrapper'>
      {
        playBtnClicked ? (
          <Content />
        ) : (
          <button className='play-btn' onClick={() => setPlayBtnClicked(true)}></button>
        )
      }
    </div>
  )
}

export default App

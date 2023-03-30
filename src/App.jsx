import React,{ useState } from 'react'
import gun from './assets/gun.png'
import './App.css'
import Title from './components/Title/Title'

import Whiteboard from './components/Whiteboard/Whiteboard'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={gun} alt="gun" />
        <Title/>
        <img src={gun} alt="gun" />
      </header>
      <Whiteboard/>
    </div>
  )
}

export default App

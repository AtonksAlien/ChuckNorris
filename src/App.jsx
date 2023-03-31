import React,React from 'react'
import gun from './assets/gun.png'
import './App.css'
import Title from './components/Title/Title'
import { Icon } from '@iconify/react';

import Whiteboard from './components/Whiteboard/Whiteboard'
import Button from './components/Button/Button'
import Categories from './components/Categories/Categories'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={gun} alt="gun" />
        <Title/>
        <img src={gun} alt="gun" />
      </header>
    </div>
  )
}

export default App

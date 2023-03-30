import React,{ useState } from 'react'
import gun from './assets/gun.png'
import './App.css'
import Title from './components/Title/Title'
import { Icon } from '@iconify/react';

import Whiteboard from './components/Whiteboard/Whiteboard'
import Button from './components/Button/Button'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={gun} alt="gun" />
        <Title/>
        <img src={gun} alt="gun" />
      </header>
      <Whiteboard/>
      <Button variant='clipboard'>
        COPY TO CLIPBOARD
        <Icon icon="material-symbols:content-copy-outline" width={30} color='#fff'/>
      </Button>
      <Button>
        GENERA JOKE
      </Button> 

    </div>
  )
}

export default App

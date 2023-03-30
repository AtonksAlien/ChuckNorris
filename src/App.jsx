import React,{ useState } from 'react'
import gun from './assets/gun.png'
import { Icon } from '@iconify/react';
import './App.css'
import Title from './components/Title/Title'
import Categories from './components/Categories/Categories'
import Whiteboard from './components/Whiteboard/Whiteboard'
import Button from './components/Button/Button'

function App() {

  const [selected, setSelected] = useState('SCEGLI TEMA');
  const [joke, setJoke] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={gun} alt="gun" />
        <Title/>
        <img src={gun} alt="gun" />
      </header>
      <Categories 
        selected={selected}
        setSelected={setSelected}
      />
      <Whiteboard
        joke={joke}
      />
      <Button 
        variant='clipboard'
        active = {joke == ''}
        action={()=>{navigator.clipboard.writeText(joke)}}
      >
        COPY TO CLIPBOARD
        <Icon icon="material-symbols:content-copy-outline" width={30} color='#fff'/>
      </Button>
      <Button action={()=>{fetch('https://api.chucknorris.io/jokes/random'+ `${selected == 'SCEGLI TEMA' ? '' : '?category=' + selected}`)
              .then((response) => response.json())
              .then((data) => {setJoke(data.value)})
      }}>
        GENERA JOKE
      </Button> 

    </div>
  )
}

export default App

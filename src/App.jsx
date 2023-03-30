import React from 'react'
import gun from './assets/gun.png'
import './App.css'
import Title from './components/Title/Title'
import Categories from './components/Categories/Categories'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={gun} alt="gun" />
        <Title/>
        <img src={gun} alt="gun" />
      </header>
      <Categories/>
    </div>
  )
}

export default App

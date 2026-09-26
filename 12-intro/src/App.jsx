import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Component } from 'react'
import Welcome from '/src/components/Test.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Компоненти React:</h1>
      <Welcome /> 
    </>
  )
}

export default App

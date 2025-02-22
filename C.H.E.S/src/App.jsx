import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CountDown from './countDownPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const arialStyle = {
    fontFamily: 'Arial, sans-serif', 
    fontSize: '5em', 
    color: 'red',
    textAlign: 'center', 
    margin: '20px' 
  };
  return (
    <>
      <div>
      <p style={arialStyle}>
          You Blink, You Lose!
      </p>
      </div>
      <CountDown/>
    </>
  )
} 

export default App


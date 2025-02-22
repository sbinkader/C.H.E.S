
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CountDown from './countDownPage'
import './App.css'
import Username from './landingPage'
import SelectTheTwo from './Mode'
import GamePage from "./Gamepage";



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
      <Username/>
      <div>
      <p style={arialStyle}>
          You Blink, You Lose!
      </p>
      </div>
      <CountDown/>
      <SelectTheTwo/>
      <GamePage />
    </>
  )
} 

export default App



// return (
//   <>
//     <div>
//       <a href="https://vite.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more.
//     </p>
//   </>
// )
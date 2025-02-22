import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectTheTwo from './Mode'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SelectTheTwo/>
    </>
  )
}

export default App

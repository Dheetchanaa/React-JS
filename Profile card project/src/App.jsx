import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cardproject } from './Components/Cardproject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cardproject/>
    </>
  )
}

export default App

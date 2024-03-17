import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signupp from './Component/Authentication/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signupp/>
    
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 className="bg-red-400 text-white p-4 rounded-md mb-4">Tailwind</h1>

    <Card username="gulfam"/>
    <Card username="fatiyana"/>
    <Card />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 rounded-lg mb-5'>Tailwind Test</h1>
    <Card name="Aliraza" CardImg="https://images.pexels.com/photos/18280486/pexels-photo-18280486/free-photo-of-man-walking-on-a-cobblestone-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <Card name= "Jacob" CardImg="https://images.pexels.com/photos/11001424/pexels-photo-11001424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <Card/>
    </>
  )
} 

export default App

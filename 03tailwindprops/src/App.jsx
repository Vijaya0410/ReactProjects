import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount]=useState(0)
  let myObj={
    username:"Vijaya",
    age:22
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-4xl font-semibold p-4 rounded-lg'>Hello Tailwind CSS</h1>
      <Card username="reactjs" someObj={newArr}/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './Header'

function App() {

  let displayData=()=>{
    alert("Welcome to React Js")

  }

  let addData=(a,b)=>{
     console.log(a+b);
  }

  return (
    <>
      <div className='App'>
      <button className='bg-[red] p-[10px] mr-11' onClick={()=> addData(20,25)}>Add Data</button>
      <button className='bg-[red] p-[10px]' onClick={displayData}>Save</button>
      <img src='https://www.wscubetech.com/images/wscube-tech-logo.svg'/>

      <Header/>
      <h1 className='text-4xl font-bold'>Hello React Js</h1>
      </div>
    </>
  )
}

export default App

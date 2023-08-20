
import { useState } from 'react'
import './App.css'
import User from './Componets/User'

function App() {
  const [familiar, setFamilier]= useState(false)

  return (
    <>
     <h2>is Familier: {familiar.toString()}</h2>
<button onClick={()=>setFamilier(!familiar)}>Toggle</button>
    <User familiar={familiar}></User>
    </>
  )
}

export default App

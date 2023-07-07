import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.scss'
import { InputText } from './components/form'
import Navbar from './components/navbar'

function App() {

  const [inputTextValue, setInputTextValue] = useState();

  return (
    <>
      <Navbar />
      {/*
        <InputText  
        name="name"
        placeholder="Your name"
        label={"name"}
        id="name"
        handleChange={setInputTextValue}
        error/>
      */}
    </>
  )
}

export default App

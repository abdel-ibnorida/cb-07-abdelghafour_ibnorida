import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.scss'
import { InputText } from './components/form'

function App() {
  
  const [inputTextValue, setInputTextValue] = useState();

  return (
    <>
    <div className='navbar'>
      <ul className='navbar_item'>
        <li>Home</li>
        <li>Profile</li>
        <li>About US</li>
      </ul>
    </div>
    <InputText  
        name="name"
        placeholder="Your name"
        label={"name"}
        id="name"
        handleChange={setInputTextValue}
        error/>
    </>
  )
}

export default App

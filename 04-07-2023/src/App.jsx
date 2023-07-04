import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='navbar'>
      <ul className='navbar_item'>
        <li>Home</li>
        <li>Profile</li>
        <li>About US</li>
      </ul>
    </div>
  )
}

export default App

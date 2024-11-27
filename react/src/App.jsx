import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  const [isClick, setIsClick] = useState(false)

  const [isOn, setIsOn] = useState(false)

  const [toggle, setToggle] = useState(false)

  const onClick = () => {
    setIsOn(!isOn)
  }

  const handleClick = () => {
    setToggle(!toggle)
    // if (toggle === true) {
    //   document.body.style.backgroundColor = "white";
    // } else {
    //   document.body.style.backgroundColor = "black";
    // }
    toggle ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white";

  }
  return (
    <>
      <Home />

      <div>
        <button onClick={onClick} className='bg-blue-500'>{
          isOn ? 'on' : 'off'
        }</button>
      </div>

      <div>
        <button onClick={handleClick} style={{}}>{toggle ? 'light' : 'dark'}</button>
      </div>
    </>
  )
}

export default App

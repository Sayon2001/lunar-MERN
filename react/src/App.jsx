import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './components/form/Login'
import Register from './components/form/Regiter'
import DemoCard from './pages/DemoCard'
import Products from './pages/Products'

function App() {
  // const [count, setCount] = useState(0)

  // const [isClick, setIsClick] = useState(false)

  // const [isOn, setIsOn] = useState(false)

  // const [toggle, setToggle] = useState(false)

  // const onClick = () => {
  //   setIsOn(!isOn)
  // }

  // const handleClick = () => {
  //   setToggle(!toggle)
  //   // if (toggle === true) {
  //   //   document.body.style.backgroundColor = "white";
  //   // } else {
  //   //   document.body.style.backgroundColor = "black";
  //   // }
  //   toggle ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white";

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }

  const router = new createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/democard',
          element: <DemoCard />
        },
        {
          path: '/products',
          element: <Products />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
    ,
    {
      path: '*',
      element: <NotFound />
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}
      {/* 
      <div>
        <button onClick={onClick} className='bg-blue-500'>{
          isOn ? 'on' : 'off'
        }</button>
      </div>

      <div>
        <button onClick={handleClick} style={{}}>{toggle ? 'light' : 'dark'}</button>
      </div> */}
    </>
  )
}

export default App

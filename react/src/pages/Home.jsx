import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    const [data, setData] = useState(0)
    const Counter = () => {
        setData(data + 1)
    }
    return (
        <>
            <div className='mt-40 text-center'>
                <h1>Counter</h1>
                <h2>{data}</h2>
                <button onClick={Counter} className='bg-green-800 h-8 w-24 rounded-md text-white'>Click Me!</button>
            </div>
        </>

    )
}

export default Home

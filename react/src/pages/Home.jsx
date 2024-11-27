import React, { useState } from 'react'

const Home = () => {
    const [data, setData] = useState(0)
    const Counter = () => {
        setData(data + 1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>{data}</h2>
            <button onClick={Counter}>Click Me!</button>
        </div>
    )
}

export default Home

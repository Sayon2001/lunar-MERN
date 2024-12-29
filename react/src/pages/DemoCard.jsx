import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Card = () => {
    const [data, setData] = useState();

    const fetch = async () => {
        // try {
        //     const res = axios.get('https://jsonplaceholder.typicode.com/posts')
        //     setData(res.data)

        // } catch (error) {
        //     console.log(e);

        // }
        await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setData(res.data)
        }).catch((e) => {
            console.log(e);

        })
    }
    console.log(data);


    useEffect(() => {
        fetch();
    }, [])
    return (
        <div>
            <h1 className='text-lg font-extrabold'>Api fetch</h1>
            <div>
                {
                    data?.map((item, index) => {
                        return (
                            <div key={index} className='p-2'>
                                <h1 className='font-extrabold'>{item.title}</h1>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card
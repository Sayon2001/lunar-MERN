import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
    const [data, setData] = useState()
    const fetch = async () => {
        await axios.get('http://192.168.1.3:8800/api/post/getAllPost').then((res) => {
            setData(res.data)
        }).catch((e) => {
            console.log(e);
        })
    }
    console.log(data)
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div className='bg-white mt-5 pt-4'>
            <ProductCard product={data} />
        </div>
    )
}

export default Products
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
    const [data, setData] = useState()
    const fetch = async () => {
        await axios.get('https://dummyjson.com/products').then((res) => {
            setData(res.data.products)
        }).catch((e) => {
            console.log(e);
        })
    }
    console.log(data)
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div className='bg-white pt-4 flex justify-center'>
            <ProductCard product={data} />
        </div>
    )
}

export default Products
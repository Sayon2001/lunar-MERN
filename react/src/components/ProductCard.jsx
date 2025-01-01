import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className='grid grid-cols-6 p-1 m-1 max-w-full'>
            {product?.map((item, index) => {
                return (
                    <>
                        <Link to={`/singleProduct/${item.id}`}>
                            <div key={index} className='w-[12rem] hover:shadow-2xl my-2 p-2 cursor-pointer'>
                                <div className='flex flex-col items-center'>
                                    <img className='h-[10.5rem]' src={item.thumbnail} alt="" />
                                </div>
                                <h3 className='text-ellipsis whitespace-nowrap overflow-hidden text-semibold text-lg'>{item.title}</h3>
                                <div className='leading-3'>
                                    <span className='text-lg text-[#F57224] font-semibold'>Rs. {(item.price - (parseInt(item.discountPercentage) * (item.price)) / 100).toFixed(2)}</span>

                                    <div className='flex gap-1 text-xs text-semibold'>
                                        <span className='line-through text-[#808080]'>{item.price}</span>
                                        <span className='text-xs'>-{item.discountPercentage}%</span>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </>
                )
            })}
        </div>

    )
}

export default ProductCard
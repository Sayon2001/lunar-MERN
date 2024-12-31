import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className='grid grid-cols-8'>
            {product?.map((item, index) => {
                return (
                    <div key={index} className='h-[10rem] bg-slate-500'>
                        {item.pname}
                        {item.price}
                        {item.description}
                        {item.images}
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className='group relative'>
            <Link to={`/products/${product.id}`}>
                <div className='overflow-hidden rounded-md bg-gray-200 '>
                    <img src={product.image} alt="" className='h-full w-full object-cover object-center' />
                </div>
            </Link>
            <div className='mt-4 flex justify-between gap-3'>
                <h3>
                    <Link>
                        {product.name}
                    </Link>
                </h3>
                <div>
                    <p className='text-sm font-bold text-gray-900'>$ {product.new_price}</p>
                </div>
            </div>


        </div>
    )
}

export default Item

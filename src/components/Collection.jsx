import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../components/Item'

const Collection = () => {
    const {new_collection} = useContext(ShopContext)
  return (
    <div>
      <div className='mx-auto max-w-2xl px-4 py-16 md:pt-24 lg:max-w-7xl lg:px-8'>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-serif'>New Collection</h2>
            <p className='text-center mt-3 md:px-56 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati deleniti repudiandae laudantium sapiente iure aliquam modi expedita magnam saepe.</p>
            <div className='mt-10 grid grid-col-1 gap-x-6 gap-y-10 px-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {
                    new_collection.map((product)=>{
                        return (
                            <Item key={product.id} product={product}></Item>
                        )
                    })
                }
            </div>
      </div>    
    </div>
  )
}

export default Collection

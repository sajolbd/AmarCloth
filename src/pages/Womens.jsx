import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../components/Item'
import banner from '../assets/WomensBanner.png'


const Womens = () => {
    const {all_product} = useContext(ShopContext)
    const womenProducts = all_product?.filter((product) => product.category === 'women')
  return (
    <div className='md:mt-32 mt-20 max-w-7xl mx-auto'>
      <div>
        <img src={banner} alt="" className='w-7/8 mx-auto md:w-full' />
      </div>
      <div className='mx-auto max-w-2xl px-4 py-15 sm:pt-24 lg:max-w-7xl lg:px-8'>
        <h1 className='text-2xl font-bold text-gray-900 text-center md:text-start'>Men's Collection</h1>
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 px-6 md:px-0 xl:gap-x-8'>
            {
                womenProducts?.map((product) =>{
                    return(
                        <Item key={product.id} product={product} ></Item>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Womens

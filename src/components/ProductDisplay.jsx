import React from 'react'

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0'>
      <div className='flex md:1/2 gap-4'>
        <div className='flex flex-col gap-4 md:h-[500px]'>
            <img src={product.image} alt="" className='md:h-[163px] w-[100px]'/>
            <img src={product.image1} alt="" className='md:h-[163px] w-[100px]'/>
            <img src={product.image3} alt="" className='md:h-[163px] w-[100px]'/>
            <img src={product.image2} alt="" className='md:h-[163px] w-[100px]'/>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay

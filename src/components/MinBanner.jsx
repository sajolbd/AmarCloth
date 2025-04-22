import React from 'react'
import banner from '../assets/MidBanner.jpg'
const MinBanner = () => {
  return (
    <div className='bg-gray-100 py-24'>
                <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] text-black' style={{ backgroundImage: `url(${banner})`,backgroundPosition:'center',backgroundAttachment:'fixed'}}>
                    <div className='absolute inset-0 md:rounded-2xl bg-black/50 bg-opacity-50 flex flex-col items-center justify-center'>
                        <div className='text-center text-white px-4'></div>
                        <h1 className='text-3xl  text-white md:text-5xl lg:text-6xl font-bold mb-4'>Discover Your Style</h1>
                        <p className='text-lg md:text-xl mb-6 text-white'>Discover the hottest trends for the season.Limited time offer.20% off all the new arrivals!</p>
                        <button className='bg-red-600  hover:bg-red-500 text-white font-semibold py-2 px-3 rounded-md '>Shop Now</button>
                    </div>
                </div>
            </div>
  )
}

export default MinBanner

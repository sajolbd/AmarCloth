import React from 'react'

const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid grid-col-1 px-4 sm:grid-cols-2 md:px-0 md:grid-cols-3  lg:grid-cols-4 gap-4 py-6 max-w-7xl mx-auto'>
                {/* first banner  */}
                <div className='relative h-[250px]'>
                    <img src="https://images.pexels.com/photos/6051248/pexels-photo-6051248.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className='absolute inset-0 bg-gray-800/50 rounded-lg flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>New Arrival</h2>
                        <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                    </div>
                </div>
                {/* second banner  */}
                <div className='relative h-[250px]'>
                    <img src="https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className='absolute inset-0 bg-gray-800/50 rounded-lg flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Limited Offer</h2>

                    </div>
                </div>
                {/* third banner  */}
                <div className='relative h-[250px] col-span-1 md:col-span-2'>
                    <img src="https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='object-cover w-full h-full rounded-lg shadow-lg' />
                    <div className='absolute inset-0 bg-yellow-800/50 flex flex-col items-center justify-center'>
                        <h3 className='text-white text-4xl font-bold'>Season Sale</h3>
                        <p className='text-white my-2 text-lg'>Up to 70% off</p>
                        <button className='text-whtie bg-yellow-500 rounded-md px-3 py-1'>Shop Now</button>
                    </div>
                </div>
                {/* Fourth Banner  */}
                <div className='relative h-[250px] col-span-1 md:col-span-2'>
                    <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='object-cover w-full h-full rounded-lg shadow-lg' />
                    <div className='absolute inset-0 bg-orange-800/50 flex flex-col items-center justify-center'>
                        <h3 className='text-white text-4xl font-bold'>Season Sale</h3>
                        <p className='text-white my-2 text-lg'>Up to 70% off</p>
                        <button className='text-whtie bg-red-500 rounded-md px-3 py-1'>Shop Now</button>
                    </div>
                </div>
                {/* Fifth Banner  */}
                <div className='relative h-[250px]'>
                    <img src="https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className='absolute inset-0 bg-gray-800/50 rounded-lg flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Limited Offer</h2>

                    </div>
                </div>
                {/* sixth banner  */}
                <div className='relative h-[250px]'>
                    <img src="https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full h-full object-cover rounded-lg shadow-lg' />
                    <div className='absolute inset-0 bg-gray-800/50 rounded-lg flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>New Arrival</h2>
                        <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner

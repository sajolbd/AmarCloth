import React from 'react'
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'


const Features = () => {

    const features = [
        { icon: Truck, text: 'Free Shipping', subtitle: 'On order over $100' },
        { icon: Lock, text: 'Secure Payment', subtitle: '100% protected payments' },
        { icon: RotateCcw, text: 'Easy Return', subtitle: '30-day return policy' },
        { icon: Clock, text: '24/7 Support', subtitle: 'Dedicated customer service' },
    ]

    return (
        <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-8'>
                    {
                        features.map((item, index) => {
                            return (
                                <div  key={index} className='flex items-center justify-center text-center sm:text-left'>
                                    <item.icon className='flex-shrink-0 h-10 w-10 text-gray-600' aria-hidden='true' />
                                    <div className='ml-4'>
                                        <p className='text-base text-gray-900 font-medium'>{item.text}</p>
                                        <p className='text-sm text-gray-500'>{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Features

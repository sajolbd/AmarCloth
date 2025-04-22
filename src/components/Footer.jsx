import React from 'react'
import { Link } from 'react-router-dom'
import { CiFacebook, CiInstagram,CiTwitter   } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-200 py-15 px-4 md:px-0'>
        <div className='max-w-7xl mx-auto md:flex md:justify-between'>
            {/* information  */}
            <div className='mb-6 md:mb-0'>
                <Link to={'/'}> <p className='font-bold text-2xl text-red-600'>AmarShop</p></Link>
                <p className='mt-2 text-base'>High-quality, sustainable clothing at affordable prices.</p>
                <p className='mt-4 text-sm'>123 Fashion St, Style City, NY 10001</p>
                <p className='mt-2 text-sm'>Email: support@clothify.com</p>
                <p className='mt-2 text-sm'>Phone: (123) 456-7890</p>
            </div>
            <div className='mb-6 md:mb-0'>
                <h1 className='mb-2 text-xl font-bold'>Customer Service</h1>
                <p className='mt-2 text-sm'>Contact Us</p>
                <p className='mt-2 text-sm'>Shipping & Returns</p>
                <p className='mt-2 text-sm'>FAQs</p>
                <p className='mt-2 text-sm'>Order Tracking</p>
                <p className='mt-2 text-sm'>Size Guide</p>
            </div>
            <div className='mb-6 md:mb-0'>
                 <h1 className='text-xl font-bold mb-2'>Follow Us</h1>
                 <div className='flex items-center justify-start gap-3'>
                    <p><CiFacebook size={25}></CiFacebook></p>
                    <p><CiInstagram size={25}></CiInstagram></p>
                    <p><CiTwitter  size={25}></CiTwitter></p>
                    <p><FaPinterest size={25}></FaPinterest></p>
                 </div>
            </div>
            <div className='mb-6 md:mb-0'>
                <h1 className='text-xl font-bold '>Stay in the Loop</h1>
                <p className='text-sm text-gray-200 mt-2'>Subscribe to get special offers, free giveaways, and more</p>
                <input className='border border-gray-700 bg-gray-700 py-2 text-gray-200 mt-2 w-3/4 rounded-l-lg p-2' type="email" name="" id="" placeholder='Your Email Address'/>
                <button className='bg-red-600 rounded-r-lg py-2 px-2'>Subscribe</button>
            </div>
        </div>
        <hr className='text-gray-400 mt-8 '/>
        <p className='text-sm text-center mt-6'>©2025 <span className='text-red-600'>AmarShop</span> .All rights reserved</p>
    </div>
  )
}

export default Footer

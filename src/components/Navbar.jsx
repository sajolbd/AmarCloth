import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import ResponsiveView from '../components/ResponsiveMenu'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggleNav = () => {
        setOpen(!open)
    }


    return (
        <div className='bg-white px-4 fixed w-full z-50 shadom-sm top-0 shadow-gray-400 py-1  border-b border-b-[#e7e7e7]'>
            <div className='max-w-7xl mx-auto py-2 px-5 flex justify-between items-center'>
                <Link to={'/'}><h1 className='text-2xl font-bold text-red-600'>AmarCloth</h1></Link>
                <div className='flex items-center gap-5'>
                    <nav className='hidden md:block'>
                        <ul className='flex items-center font-semibold text-base gap-6'>
                            <Link  to={'/'} >Home</Link>
                            <Link  to={'/mens'} >Mens</Link>
                            <Link  to={'/womens'}>Womens</Link>
                            <Link  to={'/kids'} >Kids</Link>
                            <button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800 hover:scale-110 duration-200 transform'>Login</button>
                        </ul>
                    </nav>
                    <Link to={'/cart'} className='relative'>
                        <FiShoppingCart size={25}></FiShoppingCart>
                        <span className='absolute bg-red-600 w-5 h-5 rounded-full -top-2 -right-2 flex items-center justify-center text-white'>1</span>
                    </Link>
                    {/* mpbble hamburger Menue  */}
                    {
                        !open ? (<HiMenuAlt1 onClick={toggleNav} className='cursor-pointer transition-all md:hidden' size={25}></HiMenuAlt1>) : (<HiMenuAlt3 onClick={toggleNav} className='cursor-pointer transition-all md:hidden' size={25}></HiMenuAlt3>)
                    }
                </div>
            </div>
            <ResponsiveView open={open} setOpen={setOpen} toggleNav={toggleNav} ></ResponsiveView>
        </div>
    )
}

export default Navbar

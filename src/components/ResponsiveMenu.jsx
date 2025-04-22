import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({ open, setOpen,toggleNav }) => {
    return (
        <div className={`${open ? 'left-0' : '-left-[100%]' } fixed bottom-0   top-0 z-20 flex h-screen w-2/4 flex-col  justify-between px-8 pb-6 pt-16 bg-gray-300  text-black md:hidden rounded-r-xl shadow-md}`}>
            <div>
                <div className='flex justify-start items-cemter gap-3'>
                    <FaUserCircle size={40}></FaUserCircle>
                    <div className=''>
                        <h1>Hello User</h1>
                        <h1 className='text-sm text-slate-500'>Premium User</h1>
                    </div>
                </div>
                <nav className=' mt-12'>
                    <ul className='flex flex-col space-y-4 text-xl'>
                        <Link onClick={toggleNav} to={'/'} >Home</Link>
                        <Link onClick={toggleNav} to={'/mens'} >Mens</Link>
                        <Link onClick={toggleNav} to={'/womens'}>Womens</Link>
                        <Link onClick={toggleNav} to={'/kids'} >Kids</Link>
                        <Link to={'/login'}><button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800 hover:scale-110 duration-200 transform'>Login</button></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ResponsiveMenu

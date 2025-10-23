import Image from 'next/image';
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className='fixed w-full h-16 flex justify-between items-center px-5 shadow-md bg-white'>
            {/* nav left  */}
            <div className='flex items-center justify-center  gap-6'>
                <IoIosMenu size={40} color='gray' className='cursor-pointer' />
                <Image
                    src='/logo.jpg'
                    width={60}
                    height={80}
                    className='p-0 m-0'
                    alt='logo.jpg' />
            {/* search bar */}
            <div className='flex items-center gap-4 bg-gray-200 px-4 py-2 rounded-full'>
                <CiSearch />
                <input type="text" placeholder='Search' />
            </div>
             </div>
            {/* end nav */}
            {/* nav right */}
            <div className='flex items-center justify-center gap-4'>
               <div className='flex items-center gap-2'>
                 <FaEdit size={20} color='gray' className='cursor-pointer' />
                 <h3 className='text-xl text-gray-500 '>Write</h3>
               </div>
               <div>
                <FaRegBell size={20} color='black' className='cursor-pointer'/>
               </div>
               <div className='h-10 w-10 text-white bg-emerald-700 rounded-full flex justify-center items-center'>
                    <h3>MW</h3>
                </div>
            </div>
        </div>
    )
}

export default NavBar
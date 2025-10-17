import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen overflow-hidden w-full flex items-center justify-center  '>
      <div className='flex h-[550px] ring ring-emerald-700 w-[900px] shadow-md bg-white rounded-md overflow-hidden'>

        <div className='w-1/2 p-8 '>
        <Image
            src="/logo.jpg"
            alt="Website logo"
            width={150}
            height={150}
            className="mb-6 mt-10"
          />
          <h2 className='text-2xl font-semibold mb-6'>Login to Your Account</h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='email'>Email</label>
              <input type='email' id='email' className='w-full border border-gray-300 p-2 rounded' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='password'>Password</label>
              <input type='password' id='password' className='w-full border border-gray-300 p-2 rounded' />
            </div>
            <button type='submit' className='w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition'>Login</button>
          </form>
          <p className = "text-sm  text-gray-600 text-center mt-5">
                Don't have an account
               <Link href = 'register' className = "ml-2 text-emerald-600 hover:underline">
                   sign in
               </Link>
            </p>
        </div>
         <div className='w-1/2 bg-emerald-800 flex items-center justify-center'>
         <img src="login.jpg"  alt="login image" className ="w-full h-full object-cover" />
        </div>
       </div>
    </div>
  )
}

export default page
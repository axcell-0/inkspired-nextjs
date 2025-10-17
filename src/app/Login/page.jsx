import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-50'>
      <div className='flex h-[600px] w-[900px] shadow-lg rounded-2xl overflow-hidden bg-white'>
        <div className='w-1/2 flex flex-col items-center'>
          <Image
            src='/logo.jpg'
            alt='logo image'
            width={200}
            height={200}
            className='mb-6 mt-10'
          />
          <div className='w-full px-8'>
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
              <p className='text-sm text-gray-600 text-container'>
                If you don't have an acount?  Register.
              </p>
            </form>
          </div>
        </div>
        <div className='w-1/2 bg-emerald-800 flex items-center justify-center'>
          <Image
            src='/login.jpg'
            alt='Login image'
            width={500}
            height={500}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Page

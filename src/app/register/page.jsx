'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'  // ✅ Correct import

const Page = () => {
  const router = useRouter()  // ✅ initialize router
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleRegister = () => {
    if (!email || !firstName || !lastName || !password) {
      toast.error('Please fill all fields')
      return
    }

    const payload = { firstName, lastName, email, password }
    console.log('Received Data:', payload)

    // Store locally
    localStorage.setItem('user', JSON.stringify(payload))
    toast.success('Registered Successfully')

    // ✅ Client-side redirect
    router.push('/home')
  }

  return (
    <div className='h-screen overflow-hidden w-full flex items-center justify-center'>
      <ToastContainer position='top-center' />
      <div className='flex h-[550px] w-[900px] shadow-md bg-white rounded-lg overflow-hidden ring ring-emerald-700'>
        <div className='w-1/2 bg-emerald-800 flex items-center justify-center'>
          <img
            src='register.jpg'
            alt='login image'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='w-1/2 p-8'>
          <Image
            src='/logo.jpg'
            alt='Website logo'
            width={100}
            height={100}
            className='mb-2 mt-2'
          />
          <h2 className='text-2xl font-semibold mb-2'>Join Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <form className='space-y-2'>
            <div>
              <label className='block text-sm font-medium mb-1'>First name</label>
              <input
                type='text'
                onChange={(e) => setFirstName(e.target.value)}
                className='w-full border border-gray-300 p-2 rounded'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Last name</label>
              <input
                type='text'
                onChange={(e) => setLastName(e.target.value)}
                className='w-full border border-gray-300 p-2 rounded'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Email</label>
              <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border border-gray-300 p-2 rounded'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>Password</label>
              <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border border-gray-300 p-2 rounded'
              />
            </div>

            <button
              type='button'
              onClick={handleRegister}
              className='w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition'
            >
              Register
            </button>
            <p className='text-sm text-gray-600 text-center'>
              Already have an account?
              <Link href='/login' className='ml-2 text-emerald-600 hover:underline'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page
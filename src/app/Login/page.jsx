'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const router = useRouter()

  // ✅ Validation function
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    let valid = true

    // Email must end with @gmail.com
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      setEmailError('Email must end with @gmail.com')
      valid = false
    } else {
      setEmailError('')
    }

    // Password rule: at least 1 uppercase, 1 lowercase, 1 special char, 8+ chars
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])[A-Za-z\d!@#$%^&*()_\-+=<>?{}[\]~]{8,}$/

    if (!passwordPattern.test(password)) {
      setPasswordError(
        'Password must have uppercase, lowercase, special character, and be at least 8 characters long.'
      )
      valid = false
    } else {
      setPasswordError('')
    }

    if (valid) {
      router.push('/home')
    }
  }

  return (
    <div className='h-screen overflow-hidden w-full flex items-center justify-center'>
      <div className='flex h-[550px] ring ring-emerald-700 w-[900px] shadow-md bg-white rounded-md overflow-hidden'>
        <div className='w-1/2 p-8'>
          <Image
            src='/logo.jpg'
            alt='Website logo'
            width={150}
            height={150}
            className='mb-6 mt-10'
          />
          <h2 className='text-2xl font-semibold mb-6'>Login to Your Account</h2>

          {/* 🔥 Updated Form */}
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label
                className='block text-sm font-medium mb-1'
                htmlFor='email'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full border border-gray-300 p-2 rounded'
                placeholder='Enter your Gmail address'
                required
              />
              {emailError && (
                <p className='text-red-600 text-sm mt-1'>{emailError}</p>
              )}
            </div>

            <div>
              <label
                className='block text-sm font-medium mb-1'
                htmlFor='password'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='w-full border border-gray-300 p-2 rounded'
                placeholder='Enter your password'
                required
              />
              {passwordError && (
                <p className='text-red-600 text-sm mt-1'>{passwordError}</p>
              )}
            </div>

            <button
              type='submit'
              className='w-full bg-emerald-800 text-white p-2 rounded hover:bg-emerald-700 transition'
            >
              Login
            </button>
          </form>

          <p className='text-sm text-gray-600 text-center mt-5'>
            Don't have an account?
            <Link href='register' className='ml-2 text-emerald-600 hover:underline'>
              Sign up
            </Link>
          </p>
        </div>

        <div className='w-1/2 bg-emerald-800 flex items-center justify-center'>
          <img
            src='login.jpg'
            alt='login image'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Page

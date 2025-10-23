'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import NavBar from  '@/components/NavBar'
import MainContent from '@/components/MainContent'
import RightSection from '@/components/RightSection'
import SideBar from '@/components/SideBar'

const Page = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    //getting user data from the local storage || check if user exist
    const userGotten = JSON.parse(localStorage.getItem('user'))
    if (!userGotten || !userGotten.email) {
      router.replace('/login') // redirect client-side
    } else {
      setUser(userGotten)
    }
  }, [router])
  // logout a user 
   const handleLogout =()=>{
    //localStorage.removeItem('user')
    router.replace('/login')
   }
  if (!user) {
    // Optional loading screen before redirect
    return (
        <div className="h-screen flex items-center 
      justify-center text-white text-2xl">
        Loading...
      </div>
    )
  }
  return (
    <>
    <NavBar />
      <div className="w-full flex ">
      {/* side bar */}
      <SideBar />
      {/* end side bar  */}
      {/* Main content */}
      <MainContent/>
      {/* End main content */}
      {/* End right section */}
      <RightSection/>
    </div>
    </>
  )
}

export default Page
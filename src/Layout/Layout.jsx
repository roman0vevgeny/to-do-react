import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(true)

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev)
  }

  return (
    <div className='relative overflow-hidden'>
      <Header />
      <div className='relative flex snap-y flex-raw'>
        <nav className='min-w-[300px] bg-nav py-10 pl-[15px] pr-[5px] overflow-y-scroll h-[calc(100vh-50px)]'>
          <Navbar className='sticky top-0' />
        </nav>
        <main className='flex relative justify-center w-full overflow-y-scroll h-[calc(100vh-50px)]'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout

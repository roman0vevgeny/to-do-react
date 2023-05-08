import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-raw'>
        <nav className='min-w-[300px] h-screen bg-nav py-10 px-[15px]'>
          <Navbar />
        </nav>
        <main className='flex justify-center w-full py-10'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout

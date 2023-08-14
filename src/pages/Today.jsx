import React from 'react'
import { Outlet } from 'react-router-dom'

const Today = () => {
  return (
    <div className='h-[calc(100vh-50px)] w-full flex justify-center pt-10'>
      <Outlet />
    </div>
  )
}

export default Today

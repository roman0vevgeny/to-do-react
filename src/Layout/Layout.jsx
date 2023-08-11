import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { navbarSlice } from '../features/navbarSlice'

// const Layout = () => {
//   const showNavbar = useSelector((state) => state.navbar.showNavbar)
//   const dispatch = useDispatch()

//   const toggleNavbar = () => {
//     dispatch(navbarSlice.actions.toggleNavbar())
//   }

//   return (
//     <div className='relative overflow-hidden'>
//       <Header toggleNavbar={toggleNavbar} showNavbar={showNavbar} />
//       <div className='relative flex snap-y flex-raw'>
//         {showNavbar && (
//           <nav className='min-w-[300px] bg-nav py-10 pl-[15px] pr-[5px] overflow-y-scroll h-[calc(100vh-50px)]'>
//             <Navbar className='sticky top-0' />
//           </nav>
//         )}
//         <main className='flex relative justify-center h-[calc(100vh-50px)] w-full'>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   )
// }

// export default Layout

const Layout = () => {
  const showNavbar = useSelector((state) => state.navbar.showNavbar)
  const dispatch = useDispatch()
  const location = useLocation()

  const toggleNavbar = () => {
    dispatch(navbarSlice.actions.toggleNavbar())
  }

  return (
    <div className='relative overflow-hidden'>
      <Header
        toggleNavbar={toggleNavbar}
        showNavbar={showNavbar}
        currentPath={location.pathname}
      />
      <div className='relative flex snap-y flex-raw'>
        {showNavbar && (
          <nav className='min-w-[300px] bg-nav py-10 pl-[15px] pr-[5px] overflow-y-scroll h-[calc(100vh-50px)]'>
            <Navbar className='sticky top-0' />
          </nav>
        )}
        <main className='flex relative justify-center h-[calc(100vh-50px)] w-full'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout

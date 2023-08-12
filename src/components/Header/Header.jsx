import React from 'react'
import styles from './Header.module.scss'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Burger from '../svgs/Burger'
import MenuButton from '../Button/MenuButton'
import SearchBar from '../SearchBar/SearchBar'
import AccountButton from '../Button/AccountButton'
import TabList from '../svgs/TabList'
import TabCards from '../svgs/TabCards'
import TabBoards from '../svgs/TabBoards'
import { NavLink } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const Header = ({ toggleNavbar, showNavbar, currentPath }) => {
  const basePath = currentPath.replace(/\/(list|cards|boards)$/, '')
  const navigate = useNavigate()
  const handleNavLinkClick = (view) => {
    localStorage.setItem('view', view)
    navigate(`${basePath}${view}`)
  }

  return (
    <div className={styles.main}>
      <div className='flex flex-raw min-w-[292px] max-w-[292px]'>
        <MenuButton svg={<Burger />} onClick={toggleNavbar} />
        <SearchBar />
      </div>
      <div
        className={`flex flex-row ${
          showNavbar ? 'ml-24 items-center' : 'mr-52 items-center'
        }`}>
        <NavLink
          to={`${basePath}/list`}
          className={(navData) =>
            navData.isActive ? styles.active : styles.button
          }
          onClick={() => handleNavLinkClick('/list')}>
          <TabList />
        </NavLink>
        <NavLink
          to={`${basePath}/cards`}
          className={(navData) =>
            navData.isActive ? styles.active : styles.button
          }
          onClick={() => handleNavLinkClick('/cards')}>
          <TabCards />
        </NavLink>
        <NavLink
          to={`${basePath}/boards`}
          className={(navData) =>
            navData.isActive ? styles.active : styles.button
          }
          onClick={() => handleNavLinkClick('/boards')}>
          <TabBoards />
        </NavLink>
      </div>
      <div className='flex flex-row'>
        <ThemeToggle />
        <AccountButton name={'Evgeny'} />
      </div>
    </div>
  )
}

export default Header

// import React from 'react'
// import styles from './Header.module.scss'
// import ThemeToggle from '../ThemeToggle/ThemeToggle'
// import Burger from '../svgs/Burger'
// import MenuButton from '../Button/MenuButton'
// import SearchBar from '../SearchBar/SearchBar'
// import AccountButton from '../Button/AccountButton'
// import TabList from '../svgs/TabList'
// import TabCards from '../svgs/TabCards'
// import TabBoards from '../svgs/TabBoards'
// import { NavLink, useLocation, useNavigate } from 'react-router-dom'

// const Header = ({ toggleNavbar, showNavbar }) => {
//   const navigate = useNavigate()

//   const location = useLocation()

//   const currentPath = location.pathname

//   function goToPage(page) {
//     const view = localStorage.getItem('view')
//     if (view) {
//       page += view
//     }

//     navigate(page)
//   }

//   return (
//     <div className={styles.main}>
//       <div className='flex flex-raw min-w-[292px] max-w-[292px]'>
//         <MenuButton svg={<Burger />} onClick={toggleNavbar} />
//         <SearchBar />
//       </div>
//       <div
//         className={`flex flex-row ${
//           showNavbar ? 'ml-24 items-center' : 'mr-52 items-center'
//         }`}>
//         <NavLink
//           to={`${currentPath}/list`}
//           className={(navData) =>
//             navData.isActive ? styles.active : styles.button
//           }>
//           <TabList />
//         </NavLink>
//         <NavLink
//           to={`${currentPath}/cards`}
//           className={(navData) =>
//             navData.isActive ? styles.active : styles.button
//           }>
//           <TabCards />
//         </NavLink>
//         <NavLink
//           to={`${currentPath}/boards`}
//           className={(navData) =>
//             navData.isActive ? styles.active : styles.button
//           }>
//           <TabBoards />
//         </NavLink>
//       </div>
//       <div className='flex flex-row'>
//         <ThemeToggle />
//         <AccountButton name={'Evgeny'} />
//       </div>
//     </div>
//   )
// }

// export default Header

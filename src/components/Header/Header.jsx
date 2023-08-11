import React from 'react'
import styles from './Header.module.scss'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Burger from '../svgs/Burger'
import MenuButton from '../Button/MenuButton'
import SearchBar from '../SearchBar/SearchBar'
import AccountButton from '../Button/AccountButton'
import ViewButton from '../Button/ViewButton'
import TabList from '../svgs/TabList'
import TabCards from '../svgs/TabCards'
import TabBoards from '../svgs/TabBoards'
import { NavLink } from 'react-router-dom'

const Header = ({ toggleNavbar, showNavbar, currentPath }) => {
  const basePath = currentPath.replace(/\/(list|cards|boards)$/, '')

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
          }>
          <TabList />
        </NavLink>
        <NavLink
          to={`${basePath}/cards`}
          className={(navData) =>
            navData.isActive ? styles.active : styles.button
          }>
          <TabCards />
        </NavLink>
        <NavLink
          to={`${basePath}/boards`}
          className={(navData) =>
            navData.isActive ? styles.active : styles.button
          }>
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

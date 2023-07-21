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

const Header = ({ toggleNavbar, showNavbar }) => {
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
        <ViewButton svg={<TabList />} />
        <ViewButton svg={<TabCards />} />
        <ViewButton svg={<TabBoards />} />
      </div>
      <div className='flex flex-row'>
        <ThemeToggle />
        <AccountButton name={'Evgeny'} />
      </div>
    </div>
  )
}

export default Header

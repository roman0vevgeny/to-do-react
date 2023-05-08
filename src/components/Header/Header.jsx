import React from 'react'
import styles from './Header.module.scss'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Burger from '../svgs/Burger'
import MenuButton from '../Button/MenuButton'
import SearchBar from '../SearchBar/SearchBar'
import AccountButton from '../Button/AccountButton'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div className={styles.main}>
      <div className='flex flex-raw min-w-[292px]'>
        <MenuButton svg={<Burger />} />
        <SearchBar />
      </div>
      <div className='flex flex-row ml-16'>
        {/* <Button children={'Add task'} /> */}
      </div>
      <div className='flex flex-row'>
        <ThemeToggle />
        <AccountButton name={'Evgeny'} />
      </div>
    </div>
  )
}

export default Header

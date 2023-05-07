import React from 'react'
import styles from './SearchBar.module.scss'
import Search from '../svgs/Search'

const SearchBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <Search />
      </div>
      <input className={styles.input} placeholder='Search' />
    </div>
  )
}

export default SearchBar

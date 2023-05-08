import React from 'react'
import styles from './SearchBar.module.scss'
import Search from '../svgs/Search'
import Close from '../svgs/Close'

const SearchBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <Search />
      </div>
      <input className={styles.input} placeholder='Search' />
      <button className={styles.close}>
        <Close />
      </button>
    </div>
  )
}

export default SearchBar

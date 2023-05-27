import React, { useState, useRef } from 'react'
import styles from './SearchBar.module.scss'
import Search from '../svgs/Search'
import Close from '../svgs/Close'
import InfoCard from '../Info/InfoCard'
import Calendar from '../svgs/Cal'
import Subtasks from '../svgs/Subtasks'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const inputRef = useRef(null)

  const handleSearchFocus = () => {
    setIsSearchFocused(true)
  }

  const handleSearchBlur = () => {
    setIsSearchFocused(false)
    setSearchValue('')
  }

  const handleClearInput = () => {
    setSearchValue('')
  }

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className='relative'>
      <div className={styles.main}>
        <div className={styles.icon}>
          <Search />
        </div>
        <input
          className={styles.input}
          placeholder='Search tasks'
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          ref={inputRef}
        />
        {searchValue && (
          <button className={styles.close} onClick={handleClearInput}>
            <Close />
          </button>
        )}
      </div>
      {searchValue && isSearchFocused && (
        <div className={styles.searchPopup}>
          <div className={styles.item}>
            <p className={styles.searchText}>Some important task</p>
            <div className={styles.infoBlock}>
              <InfoCard children='12.12.2021' svg={<Calendar />} />
              <InfoCard children='0/2' svg={<Subtasks />} />
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.searchText}>No tasks found</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar

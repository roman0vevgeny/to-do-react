// import React, { useState, useRef } from 'react'
// import styles from './SearchBar.module.scss'
// import Search from '../svgs/Search'
// import Close from '../svgs/Close'
// import InfoCard from '../Info/InfoCard'
// import Calendar from '../svgs/Cal'
// import Subtasks from '../svgs/Subtasks'

// const SearchBar = () => {
//   const [searchValue, setSearchValue] = useState('')
//   const [isSearchFocused, setIsSearchFocused] = useState(false)
//   const inputRef = useRef(null)

//   const handleSearchFocus = () => {
//     setIsSearchFocused(true)
//   }

//   const handleSearchBlur = () => {
//     setIsSearchFocused(false)
//     setSearchValue('')
//   }

//   const handleClearInput = () => {
//     setSearchValue('')
//   }

//   const handleInputChange = (e) => {
//     setSearchValue(e.target.value)
//   }

//   return (
//     <div className='relative'>
//       <div className={styles.main}>
//         <div className={styles.icon}>
//           <Search />
//         </div>
//         <input
//           className={styles.input}
//           placeholder='Search tasks'
//           value={searchValue}
//           onChange={handleInputChange}
//           onFocus={handleSearchFocus}
//           onBlur={handleSearchBlur}
//           ref={inputRef}
//         />
//         {searchValue && (
//           <button className={styles.close} onClick={handleClearInput}>
//             <Close />
//           </button>
//         )}
//       </div>
//       {searchValue && isSearchFocused && (
//         <div className={styles.searchPopup}>
//           <div className={styles.item}>
//             <p className={styles.searchText}>Some important task</p>
//             <div className={styles.infoBlock}>
//               <InfoCard children='12.12.2021' svg={<Calendar />} />
//               <InfoCard children='0/2' svg={<Subtasks />} />
//             </div>
//           </div>
//           <div className={styles.item}>
//             <p className={styles.searchText}>No tasks found</p>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default SearchBar

// import React, { useState, useRef, useEffect } from 'react'
// import styles from './SearchBar.module.scss'
// import Search from '../svgs/Search'
// import Close from '../svgs/Close'
// import TaskCard from './TaskCard/TaskCard'
// import { useSelector } from 'react-redux'

// const useOnClickOutside = (ref, callback) => {
//   const handleClick = (e) => {
//     if (ref.current && !ref.current.contains(e.target)) {
//       callback()
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('click', handleClick)

//     return () => {
//       document.removeEventListener('click', handleClick)
//     }
//   }, [ref, callback])
// }

// const SearchBar = () => {
//   const [searchValue, setSearchValue] = useState('')
//   const [isSearchFocused, setIsSearchFocused] = useState(false)
//   const inputRef = useRef(null)
//   const popupRef = useRef(null)
//   useOnClickOutside(popupRef, () => {
//     setIsSearchFocused(false)
//     setSearchValue('')
//   })

//   const handleSearchFocus = () => {
//     setIsSearchFocused(true)
//   }

//   const handleClearInput = () => {
//     setSearchValue('')
//   }

//   const handleInputChange = (e) => {
//     setSearchValue(e.target.value)
//   }

//   const tasks = useSelector((state) => state.tasks.tasks)

//   const filteredTasks = tasks.filter((task) =>
//     task.name.toLowerCase().includes(searchValue.toLowerCase())
//   )

//   return (
//     <div className='relative'>
//       <div className={styles.main}>
//         <div className={styles.icon}>
//           <Search />
//         </div>
//         <input
//           className={styles.input}
//           placeholder='Search tasks'
//           value={searchValue}
//           onChange={handleInputChange}
//           onFocus={handleSearchFocus}
//           ref={inputRef}
//         />
//         {searchValue && (
//           <button className={styles.close} onClick={handleClearInput}>
//             <Close />
//           </button>
//         )}
//       </div>
//       {searchValue && isSearchFocused && (
//         <div className={styles.searchPopup} ref={popupRef}>
//           {filteredTasks.length > 0 ? (
//             filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
//           ) : (
//             <div className={styles.item}>
//               <p className={styles.searchText}>No tasks found</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default SearchBar

import React, { useState, useRef } from 'react'
import styles from './SearchBar.module.scss'
import Search from '../svgs/Search'
import Close from '../svgs/Close'
import TaskCard from './TaskCard/TaskCard'
import { useSelector } from 'react-redux'
import ArrowLeft from '../svgs/ArrowLeft'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [limitTasks, setLimitTasks] = useState(true)
  const inputRef = useRef(null)

  const handleSearchFocus = () => {
    setIsSearchFocused(true)
  }

  const handleClearInput = () => {
    setSearchValue('')
    setIsSearchFocused(true)
    setLimitTasks(true)
  }

  const handleCloseInput = () => {
    setSearchValue('')
    setIsSearchFocused(false)
    setLimitTasks(true)
  }

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const tasks = useSelector((state) => state.tasks.tasks)

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className='relative'>
      <div className={styles.main}>
        <div className={styles.icon}>
          <Search />
        </div>
        <input
          className={
            isSearchFocused ? styles.inputActive : styles.inputInactive
          }
          placeholder='Search tasks'
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleSearchFocus}
          ref={inputRef}
        />
        {searchValue && (
          <button
            type='button'
            className={styles.clear}
            onClick={handleClearInput}>
            <Close />
          </button>
        )}
        {isSearchFocused && (
          <button className={styles.close} onClick={handleCloseInput}>
            <ArrowLeft />
          </button>
        )}
      </div>
      {searchValue && isSearchFocused && (
        <div
          className={
            !limitTasks && filteredTasks.length > 14
              ? styles.searchPopupLimited
              : styles.searchPopup
          }>
          {filteredTasks.length > 0 ? (
            filteredTasks
              .slice(0, limitTasks ? 12 : filteredTasks.length)
              .map((task) => <TaskCard key={task.id} task={task} />)
          ) : (
            <div className={styles.item}>
              <p>No tasks found</p>
            </div>
          )}
          {filteredTasks.length > 12 && limitTasks && (
            <div
              className={styles.limitButton}
              onClick={() => setLimitTasks(false)}>
              <p>...</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar

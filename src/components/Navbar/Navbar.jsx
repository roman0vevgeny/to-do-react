import React from 'react'
import NavButton from '../Button/NavButton'
import AllTasks from '../svgs/AllTasks'
import Today from '../svgs/Today'
import Projects from '../svgs/Projects'
import Star from '../svgs/Star'
import styles from './Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTag } from '../../features/tagsSlice'
import { updateTaskIsFavorite } from '../../features/tasksSlice'
import Dropdown from '../Dropdown/Dropdown'
import TagSvg from '../svgs/TagSvg'
import DropdownFavorites from '../Dropdown/DropdownFavorites'
import { createSelector } from '@reduxjs/toolkit'
import {
  selectTotalTasks,
  selectDueTasks,
  selectExpiredTasks,
} from '../../features/tasksSelectors'
import Expired from '../svgs/Expired'
// import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch()
  const allTags = useSelector((state) => state.tags)
  const selectTasks = (state) => state.tasks.tasks

  // const location = useLocation()
  // const navigate = useNavigate()

  const totalTasks = useSelector(selectTotalTasks)
  console.log('totalTasks', totalTasks)
  const dueTasks = useSelector(selectDueTasks)
  console.log('dueTasks', dueTasks)
  const expiredTasks = useSelector(selectExpiredTasks)
  console.log('expiredTasks', expiredTasks)

  const selectFavoriteTasks = createSelector([selectTasks], (tasks) =>
    tasks.filter((task) => task.favorite)
  )
  const favorites = useSelector(selectFavoriteTasks)

  const handleDeleteTag = (tag) => {
    dispatch(deleteTag(tag.id))
  }

  const handleRemoveFavorite = (task) => {
    dispatch(updateTaskIsFavorite(task.id))
  }

  const view = localStorage.getItem('view')

  return (
    <div className={styles.main}>
      <NavButton
        children={'All tasks'}
        svgLeft={<AllTasks />}
        counter={totalTasks}
        to={`/home${view}`}
      />
      <NavButton
        children={'Today'}
        svgLeft={<Today />}
        counter={dueTasks}
        to={`/today${view}`}
      />
      <NavButton
        children={'Expired'}
        svgLeft={<Expired />}
        counter={expiredTasks}
        to={`/expired${view}`}
      />
      <div className={styles.sectionDevider}></div>
      {/* <NavButton children={'Projects'} svgLeft={<Projects />} /> */}
      <DropdownFavorites
        children={'Favorites'}
        items={favorites}
        onRemoveFavorite={handleRemoveFavorite}
        svg={<Star />}
      />
      <Dropdown
        children={'Tags'}
        items={allTags}
        onDeleteTag={handleDeleteTag}
        svg={<TagSvg />}
        className='m-0 p-0'
      />
    </div>
  )
}

export default Navbar

// import React from 'react'
// import NavButton from '../Button/NavButton'
// import AllTasks from '../svgs/AllTasks'
// import Today from '../svgs/Today'
// import Projects from '../svgs/Projects'
// import Star from '../svgs/Star'
// import styles from './Navbar.module.scss'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteTag } from '../../features/tagsSlice'
// import { updateTaskIsFavorite } from '../../features/tasksSlice'
// import Dropdown from '../Dropdown/Dropdown'
// import TagSvg from '../svgs/TagSvg'
// import DropdownFavorites from '../Dropdown/DropdownFavorites'
// import { createSelector } from '@reduxjs/toolkit'
// import {
//   selectTotalTasks,
//   selectDueTasks,
//   selectExpiredTasks,
// } from '../../features/tasksSelectors'
// import Expired from '../svgs/Expired'
// import { useNavigate } from 'react-router-dom'

// const Navbar = () => {
//   const dispatch = useDispatch()
//   const allTags = useSelector((state) => state.tags)
//   const selectTasks = (state) => state.tasks.tasks

//   const totalTasks = useSelector(selectTotalTasks)
//   const dueTasks = useSelector(selectDueTasks)
//   const expiredTasks = useSelector(selectExpiredTasks)

//   const navigate = useNavigate()

//   function goToPage(page) {
//     const view = localStorage.getItem('view')
//     if (view) {
//       page += view
//     }
//     navigate(page)
//   }

//   const selectFavoriteTasks = createSelector([selectTasks], (tasks) =>
//     tasks.filter((task) => task.favorite)
//   )
//   const favorites = useSelector(selectFavoriteTasks)

//   const handleDeleteTag = (tag) => {
//     dispatch(deleteTag(tag.id))
//   }

//   const handleRemoveFavorite = (task) => {
//     dispatch(updateTaskIsFavorite(task.id))
//   }

//   return (
//     <div className={styles.main}>
//       <NavButton
//         children={'All tasks'}
//         svgLeft={<AllTasks />}
//         counter={totalTasks}
//         onClick={() => goToPage('/home')}
//       />
//       <NavButton
//         children={'Today'}
//         svgLeft={<Today />}
//         counter={dueTasks}
//         onClick={() => goToPage('/today')}
//       />
//       <NavButton
//         children={'Expired'}
//         svgLeft={<Expired />}
//         counter={expiredTasks}
//         onClick={() => goToPage('/expired')}
//       />
//       <div className={styles.sectionDevider}></div>
//       {/* <NavButton children={'Projects'} svgLeft={<Projects />} /> */}
//       <DropdownFavorites
//         children={'Favorites'}
//         items={favorites}
//         onRemoveFavorite={handleRemoveFavorite}
//         svg={<Star />}
//       />
//       <Dropdown
//         children={'Tags'}
//         items={allTags}
//         onDeleteTag={handleDeleteTag}
//         svg={<TagSvg />}
//         className='m-0 p-0'
//       />
//     </div>
//   )
// }

// export default Navbar

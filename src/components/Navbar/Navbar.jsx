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

const Navbar = () => {
  const dispatch = useDispatch()
  const allTags = useSelector((state) => state.tags)
  const selectTasks = (state) => state.tasks.tasks

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

  return (
    <div className={styles.main}>
      <NavButton children={'All tasks'} svgLeft={<AllTasks />} counter={'6'} />
      <NavButton children={'Today'} svgLeft={<Today />} counter={'99'} />
      <NavButton children={'Projects'} svgLeft={<Projects />} />
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

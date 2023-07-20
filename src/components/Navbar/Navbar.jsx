import React from 'react'
import NavButton from '../Button/NavButton'
import AllTasks from '../svgs/AllTasks'
import Today from '../svgs/Today'
import Projects from '../svgs/Projects'
import Star from '../svgs/Star'
import styles from './Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTag } from '../../features/tagsSlice'
import Dropdown from '../Dropdown/Dropdown'
import TagSvg from '../svgs/TagSvg'

const Navbar = () => {
  const dispatch = useDispatch()
  const allTags = useSelector((state) => state.tags)

  const handleDeleteTag = (tag) => {
    dispatch(deleteTag(tag.id))
  }

  console.log('allTags:', allTags)

  return (
    <div className={styles.main}>
      <NavButton children={'All tasks'} svgLeft={<AllTasks />} counter={'6'} />
      <NavButton children={'Today'} svgLeft={<Today />} counter={'99'} />
      <NavButton children={'Projects'} svgLeft={<Projects />} />
      <NavButton children={'Favorites'} svgLeft={<Star />} />
      <Dropdown
        children={'Tags'}
        items={allTags}
        onDeleteTag={handleDeleteTag}
        svg={<TagSvg />}
        className='m-0 p-0'
      />
      <NavButton children={'Favorites'} svgLeft={<Star />} />
    </div>
  )
}

export default Navbar

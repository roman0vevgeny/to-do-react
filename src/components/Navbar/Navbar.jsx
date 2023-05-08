import React from 'react'
import NavButton from '../Button/NavButton'
import AllTasks from '../svgs/AllTasks'
import Today from '../svgs/Today'
import Projects from '../svgs/Projects'
import Star from '../svgs/Star'
import Tag from '../svgs/Tag'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.main}>
      <NavButton children={'All tasks'} svgLeft={<AllTasks />} counter={'6'} />
      <NavButton children={'Today'} svgLeft={<Today />} counter={'99'} />
      <NavButton children={'Projects'} svgLeft={<Projects />} />
      <NavButton children={'Favorites'} svgLeft={<Star />} />
      <NavButton children={'Tags'} svgLeft={<Tag />} />
    </div>
  )
}

export default Navbar

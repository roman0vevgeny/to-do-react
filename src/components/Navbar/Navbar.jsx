import React from 'react'
import NavButton from '../Button/NavButton'
import AllTasks from '../svgs/AllTasks'
import Today from '../svgs/Today'
import Projects from '../svgs/Projects'
import Star from '../svgs/Star'
import Tag from '../svgs/Tag'

const Navbar = () => {
  return (
    <div className='w-full'>
      <NavButton children={'All tasks'} svgLeft={<AllTasks />} />
      <NavButton children={'Today'} svgLeft={<Today />} />
      <NavButton children={'Projects'} svgLeft={<Projects />} />
      <NavButton children={'Favorites'} svgLeft={<Star />} />
      <NavButton children={'Tags'} svgLeft={<Tag />} />
    </div>
  )
}

export default Navbar

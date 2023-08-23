import React from 'react'
import Arrow from '../svgs/Arrow'

const ScrollButton = ({ sectionRef }) => {
  const handleClick = () => {
    sectionRef.current.scrollTop = 0
  }

  console.log('ScrollButton rendered')

  return (
    <div
      className='absolute h-[50px] w-[50px] bottom-[160px] right-[50px] m-3 p-5 bg-[var(--checkbox-active)] rounded-full cursor-pointer shadow-md hover:bg-menu text-[var(--color-main-bg)] hover:text-menu'
      onClick={handleClick}>
      <div className='relative h-[14px] w-[15px]'>
        <div className='absolute top-0 left-[-3px] rotate-180'>
          <Arrow />
        </div>
      </div>
    </div>
  )
}

export default ScrollButton

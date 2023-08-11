import React from 'react'
import Arrow from '../svgs/Arrow'

const ScrollButton = ({ sectionRef }) => {
  const handleClick = () => {
    sectionRef.current.scrollTop = 0
  }

  console.log('ScrollButton rendered')

  return (
    <div
      className='absolute bottom-[100px] right-[50px] m-3 p-5 bg-main rounded-full cursor-pointer shadow-md hover:bg-menu text-menu'
      onClick={handleClick}>
      <div className='relative h-[14px] w-[14px]'>
        <div className='absolute top-[2px] left-[0px] rotate-180'>
          <Arrow />
        </div>
      </div>
    </div>
  )
}

export default ScrollButton

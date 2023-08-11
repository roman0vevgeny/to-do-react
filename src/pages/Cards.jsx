import React, { useState, useRef, useEffect } from 'react'
import CardItem from '../components/CardItem/CardItem'
import SectionName from '../components/SectionName/SectionName'
import CreateButton from '../components/Button/CreateButton'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  allTasksSelector,
  todayTasksSelector,
  expiredTasksSelector,
} from '../features/tasksSelectors'
import InfoBlock from '../components/Info/IndoBlock'
import ScrollButton from '../components/Button/ScrollButton'

const Cards = () => {
  const [showButton, setShowButton] = useState(false)
  let location = useLocation()
  let tasks

  switch (location.pathname) {
    case '/home/cards':
      tasks = useSelector(allTasksSelector)
      break
    case '/today/cards':
      tasks = useSelector(todayTasksSelector)
      break
    case '/expired/cards':
      tasks = useSelector(expiredTasksSelector)
      break
    default:
      tasks = []
  }

  const sectionRef = useRef(null)

  const handleScroll = () => {
    const position = sectionRef.current.scrollTop
    if (position > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [sectionRef])

  return (
    <div className='relative h-[calc(100vh-50px)] w-full flex justify-center'>
      {tasks && tasks.length === 0 ? (
        <InfoBlock location={location.pathname} />
      ) : (
        <section
          className='flex flex-col items-center overflow-y-auto h-[calc(100vh-100px)] w-full pb-10'
          ref={sectionRef}>
          <div className='mb-[50px]'>
            <div className='sticky top-0 z-[1] bg-mainBg'>
              {location.pathname === '/home/cards' && (
                <SectionName name={'Tasks'} />
              )}
              {location.pathname === '/today/cards' && (
                <SectionName name={'Today'} />
              )}
              {location.pathname === '/expired/cards' && (
                <SectionName name={'Expired'} />
              )}
            </div>
            <div className='z-[0]'>
              {tasks &&
                tasks.map((task) => (
                  <CardItem key={task.id} taskId={task.id} />
                ))}
              <div className='flex justify-between mr-5 mt-5'>
                <div></div>
                {location.pathname === '/home/cards' && <CreateButton />}
                {location.pathname === '/today/cards' && (
                  <CreateButton today={true} />
                )}
              </div>
            </div>
          </div>
          {showButton && <ScrollButton sectionRef={sectionRef} />}
        </section>
      )}
    </div>
  )
}

export default Cards

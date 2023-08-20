// import React, { useState, useRef, useEffect } from 'react'
// import ListItem from '../components/ListItem/ListItem'
// import SectionName from '../components/SectionName/SectionName'
// import CreateButton from '../components/Button/CreateButton'
// import { useSelector } from 'react-redux'
// import { useLocation } from 'react-router-dom'
// import {
//   allTasksSelector,
//   todayTasksSelector,
//   expiredTasksSelector,
// } from '../features/tasksSelectors'
// import InfoBlock from '../components/Info/IndoBlock'
// import ScrollButton from '../components/Button/ScrollButton'

// const List = () => {
//   const [showButton, setShowButton] = useState(false)
//   let location = useLocation()
//   let tasks

//   switch (location.pathname) {
//     case '/home/list':
//       tasks = useSelector(allTasksSelector)
//       console.log(tasks)
//       break
//     case '/today/list':
//       tasks = useSelector(todayTasksSelector)
//       console.log(tasks)
//       break
//     case '/expired/list':
//       tasks = useSelector(expiredTasksSelector)
//       console.log(tasks)
//       break
//     default:
//       tasks = []
//   }

//   const sectionRef = useRef(null)

//   const handleScroll = () => {
//     const position = sectionRef.current.scrollTop
//     if (position > 300) {
//       setShowButton(true)
//     } else {
//       setShowButton(false)
//     }
//   }

//   useEffect(() => {
//     if (sectionRef.current) {
//       sectionRef.current.addEventListener('scroll', handleScroll)
//     }
//     return () => {
//       if (sectionRef.current) {
//         sectionRef.current.removeEventListener('scroll', handleScroll)
//       }
//     }
//   }, [sectionRef])

//   const today = new Date()
//   const offset = today.getTimezoneOffset()
//   console.log(offset)
//   today.setMinutes(today.getMinutes() - offset)
//   const todayString = today.toISOString()
//   console.log(todayString)

//   return (
//     <div className='relative h-[calc(100vh-50px)] w-full flex justify-center'>
//       {tasks && tasks.length === 0 ? (
//         <InfoBlock location={location.pathname} />
//       ) : (
//         <section
//           className='flex flex-col items-center overflow-y-auto h-[calc(100vh-100px)] w-full pb-10'
//           ref={sectionRef}>
//           <div className='mb-[50px]'>
//             <div className='sticky top-0 z-[1] bg-mainBg'>
//               {location.pathname === '/home/list' && (
//                 <SectionName name={'Tasks'} />
//               )}
//               {location.pathname === '/today/list' && (
//                 <SectionName name={'Today'} />
//               )}
//               {location.pathname === '/expired/list' && (
//                 <SectionName name={'Expired'} />
//               )}
//             </div>
//             <div className='z-[0]'>
//               {tasks &&
//                 tasks.map((task) => (
//                   <ListItem key={task.id} taskId={task.id} />
//                 ))}
//               <div className='flex justify-between mr-5 mt-5'>
//                 <div></div>
//                 {location.pathname === '/home/list' && <CreateButton />}
//                 {location.pathname === '/today/list' && (
//                   <CreateButton today={true} />
//                 )}
//               </div>
//             </div>
//           </div>
//           {showButton && <ScrollButton sectionRef={sectionRef} />}
//         </section>
//       )}
//     </div>
//   )
// }

// export default List

// import React, { useState, useRef, useEffect } from 'react'
// import ListItem from '../components/ListItem/ListItem'
// import SectionName from '../components/SectionName/SectionName'
// import CreateButton from '../components/Button/CreateButton'
// import { useSelector, useDispatch } from 'react-redux'
// import { useLocation } from 'react-router-dom'
// import { updateTasksOrder } from '../features/tasksSlice'
// import {
//   allTasksSelector,
//   expiredTasksSelector,
//   todayTasksSelector,
// } from '../features/tasksSelectors'
// import InfoBlock from '../components/Info/IndoBlock'
// import ScrollButton from '../components/Button/ScrollButton'

// const List = () => {
//   const [showButton, setShowButton] = useState(false)
//   const [draggedTask, setDraggedTask] = useState(null)
//   const [remainingTasks, setRemainingTasks] = useState([])
//   const [startIndex, setStartIndex] = useState(null)
//   const [endIndex, setEndIndex] = useState(null)
//   let location = useLocation()
//   const dispatch = useDispatch()
//   let tasks

//   switch (location.pathname) {
//     case '/home/list':
//       tasks = useSelector(allTasksSelector)
//       console.log(tasks)
//       break
//     case '/today/list':
//       tasks = useSelector(todayTasksSelector)
//       console.log(tasks)
//       break
//     case '/expired/list':
//       tasks = useSelector(expiredTasksSelector)
//       console.log(tasks)
//       break
//     default:
//       tasks = []
//   }

//   const sectionRef = useRef(null)

//   const handleScroll = () => {
//     const position = sectionRef.current.scrollTop
//     if (position > 300) {
//       setShowButton(true)
//     } else {
//       setShowButton(false)
//     }
//   }

//   useEffect(() => {
//     if (sectionRef.current) {
//       sectionRef.current.addEventListener('scroll', handleScroll)
//     }
//     return () => {
//       if (sectionRef.current) {
//         sectionRef.current.removeEventListener('scroll', handleScroll)
//       }
//     }
//   }, [sectionRef])

//   const today = new Date()
//   const offset = today.getTimezoneOffset()
//   console.log(offset)
//   today.setMinutes(today.getMinutes() - offset)
//   const todayString = today.toISOString()
//   console.log(todayString)

//   const handleDragStart = (task) => {
//     setDraggedTask(task)
//     setRemainingTasks(tasks.filter((t) => t.id !== task.id))
//   }

//   const handleDragEnd = () => {
//     setDraggedTask(null)
//     setRemainingTasks([])
//   }

//   const handleDragEnter = (e, index) => {
//     e.preventDefault()
//     if (e.target.getAttribute('draggable')) {
//       setEndIndex(index)
//     }
//   }

//   const handleDragLeave = (e) => {
//     if (e.target.getAttribute('draggable')) {
//       setEndIndex(null)
//     }
//   }

//   const handleDragOver = (e) => {
//     e.preventDefault()
//   }

//   const handleDrop = (e) => {
//     // e.preventDefault()
//     // const newTasks = [...tasks]
//     // newTasks.splice(startIndex, 1)
//     // newTasks.splice(endIndex, 0, draggedTask)
//     // dispatch(updateTasksOrder(newTasks))
//     dispatch(updateTasksOrder({ startIndex, endIndex }))
//     setStartIndex(null)
//     setEndIndex(null)
//   }

//   return (
//     <div className='relative h-[calc(100vh-50px)] w-full flex justify-center'>
//       {tasks && tasks.length === 0 ? (
//         <InfoBlock location={location.pathname} />
//       ) : (
//         <section
//           ref={sectionRef}
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//           onDragEnd={handleDragEnd}
//           className='flex flex-col items-center overflow-y-auto h-[calc(100vh-100px)] w-full pb-10'>
//           <div className='mb-[50px]'>
//             <div className='sticky top-0 z-[1] bg-mainBg'>
//               {location.pathname === '/home/list' && (
//                 <SectionName name={'Tasks'} />
//               )}
//               {location.pathname === '/today/list' && (
//                 <SectionName name={'Today'} />
//               )}
//               {location.pathname === '/expired/list' && (
//                 <SectionName name={'Expired'} />
//               )}
//             </div>
//             <div className='z-[0]'>
//               {tasks &&
//                 remainingTasks.map((task, index) => (
//                   <ListItem
//                     key={task.id}
//                     taskId={task.id}
//                     taskIndex={index}
//                     draggable={true}
//                     onDragStart={() => handleDragStart(task)}
//                     onDragEnter={(e) => handleDragEnter(e, index)}
//                     onDragLeave={(e) => handleDragLeave(e)}
//                     hoverIndex={endIndex}
//                   />
//                 ))}
//               <div className='flex justify-between mr-5 mt-5'>
//                 <div></div>
//                 {location.pathname === '/home/list' && <CreateButton />}
//                 {location.pathname === '/today/list' && (
//                   <CreateButton today={true} />
//                 )}
//               </div>
//             </div>
//           </div>
//           {showButton && <ScrollButton sectionRef={sectionRef} />}
//         </section>
//       )}
//     </div>
//   )
// }

// export default List

import React, { useState, useRef, useEffect } from 'react'
import ListItem from '../components/ListItem/ListItem'
import SectionName from '../components/SectionName/SectionName'
import CreateButton from '../components/Button/CreateButton'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { updateTasksOrder } from '../features/tasksSlice'
import InfoBlock from '../components/Info/IndoBlock'
import ScrollButton from '../components/Button/ScrollButton'
import {
  todayTasksSelector,
  expiredTasksSelector,
} from '../features/tasksSelectors'

const List = () => {
  const [showButton, setShowButton] = useState(false)
  const [draggedTask, setDraggedTask] = useState(null)
  const [startIndex, setStartIndex] = useState(null)
  const [endIndex, setEndIndex] = useState(null)
  let location = useLocation()
  const dispatch = useDispatch()
  let tasks

  const allTasksSelector = useSelector((state) => state.tasks.tasks)
  const todayTasks = useSelector(todayTasksSelector)
  const expiredTasks = useSelector(expiredTasksSelector)

  switch (location.pathname) {
    case '/home/list':
      tasks = allTasksSelector
      console.log(tasks)
      break
    case '/today/list':
      tasks = todayTasks
      console.log(tasks)
      break
    case '/expired/list':
      tasks = expiredTasks
      console.log(tasks)
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

  const today = new Date()
  const offset = today.getTimezoneOffset()
  console.log(offset)
  today.setMinutes(today.getMinutes() - offset)
  const todayString = today.toISOString()
  console.log(todayString)

  const handleDragStart = (task, index) => {
    setDraggedTask(task)
    setStartIndex(index)
  }

  const handleDragEnd = () => {
    setDraggedTask(null)
    setStartIndex(null)
  }

  const handleDragEnter = (e, index) => {
    e.preventDefault()
    if (e.target && e.target.getAttribute('draggable')) {
      setEndIndex(index)
    }
  }

  const handleDragLeave = (e) => {
    if (e.target && e.target.getAttribute('draggable')) {
      setEndIndex(null)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    console.log('Handling drop event')
    console.log('startIndex:', startIndex)
    console.log('endIndex:', endIndex)
    dispatch(updateTasksOrder({ startIndex, endIndex }))
    setStartIndex(null)
    setEndIndex(null)
  }

  return (
    <div className='relative h-[calc(100vh-50px)] w-full flex justify-center'>
      {Array.isArray(tasks) && tasks.length === 0 ? (
        <InfoBlock location={location.pathname} />
      ) : (
        <section
          ref={sectionRef}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='flex flex-col items-center overflow-y-auto h-[calc(100vh-100px)] w-full pb-10'>
          <div className='mb-[50px]'>
            <div className='sticky top-0 z-[1] bg-mainBg'>
              {location.pathname === '/home/list' && (
                <SectionName name={'Tasks'} />
              )}
              {location.pathname === '/today/list' && (
                <SectionName name={'Today'} />
              )}
              {location.pathname === '/expired/list' && (
                <SectionName name={'Expired'} />
              )}
            </div>
            <div className='z-[0]'>
              {Array.isArray(tasks) &&
                tasks.map((task, index) => (
                  <ListItem
                    key={task.id}
                    taskId={task.id}
                    taskIndex={index}
                    draggedTask={draggedTask}
                    startIndex={startIndex}
                    onDragEnter={(e) => handleDragEnter(e, index)}
                    onDragLeave={(e) => handleDragLeave(e)}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  />
                ))}
              <div className='flex justify-between mr-5 mt-5'>
                <div></div>
                {location.pathname === '/home/list' && <CreateButton />}
                {location.pathname === '/today/list' && (
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

export default List

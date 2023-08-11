// import React from 'react'
// import ListItem from '../components/ListItem/ListItem'
// import SectionName from '../components/SectionName/SectionName'
// import NoTasks from '../components/svgs/NoTasks'
// import styles from './Home.module.scss'
// import { useSelector } from 'react-redux'
// import { expiredTasksSelector } from '../features/tasksSelectors'

// const ExpiredTasks = () => {
//   const tasks = useSelector(expiredTasksSelector)

//   return (
//     <div className='h-[calc(100vh-50px)] w-full flex justify-center pt-10'>
//       {tasks.length === 0 ? (
//         <div className={styles.emptyStateContainer}>
//           <div className='my-10 flex justify-center text-imageColor'>
//             <NoTasks />
//           </div>
//           <div className='text-task m-0'>
//             <p>There are no expired tasks for today</p>
//             <p className='text-gray text-16 font-medium mb-4 leading-1'>
//               Keep up the good work!
//             </p>
//           </div>
//         </div>
//       ) : (
//         <section className='flex flex-col items-center overflow-y-auto h-[calc(100vh-100px)] w-full pb-10'>
//           <div className='mb-[50px]'>
//             <div className='sticky top-0 z-[1] bg-mainBg'>
//               <SectionName name={'Expired'} />
//             </div>
//             <div className='z-[0]'>
//               {tasks.map((task) => (
//                 <ListItem key={task.id} taskId={task.id} />
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   )
// }

// export default ExpiredTasks

import React from 'react'
import { Outlet } from 'react-router-dom'

const ExpiredTasks = () => {
  return (
    <div className='h-[calc(100vh-50px)] w-full flex justify-center pt-10'>
      <Outlet />
    </div>
  )
}

export default ExpiredTasks

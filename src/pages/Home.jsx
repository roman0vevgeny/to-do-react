// import React from 'react'
// import Button from '../components/Button/Button'
// import Plus from '../components/svgs/Plus'
// import ListItem from '../components/ListItem/ListItem'
// import SectionName from '../components/SectionName/SectionName'
// import NoTasks from '../components/svgs/NoTasks'
// import styles from './Home.module.scss'
// import { useSelector } from 'react-redux'
// import CreateButton from '../components/Button/CreateButton'

// const Home = () => {
//   const tasks = useSelector((state) => state.tasks.tasks)

//   return (
//     <div className='h-[calc(100vh-50px)] w-full flex justify-center pt-10'>
//       {tasks.length === 0 ? (
//         <div className={styles.emptyStateContainer}>
//           <div className='my-10 flex justify-center text-imageColor'>
//             <NoTasks />
//           </div>
//           <div className='text-task m-0'>
//             <p>There are no tasks for today</p>
//             <p className='text-gray text-16 font-medium mb-4 leading-1'>
//               Let's create a new one
//             </p>
//           </div>
//           <div className='flex flex-row my-2 justify-center items-center'>
//             <Button children={'Create task'} svgLeft={<Plus />} />
//           </div>
//         </div>
//       ) : (
//         <section className='flex flex-col items-center overflow-y-auto h-[calc(100vh-100px)] w-full pb-10'>
//           <div className='mb-[50px]'>
//             <div className='sticky top-0 z-[1] bg-mainBg'>
//               <SectionName name={'Tasks'} />
//             </div>
//             <div className='z-[0]'>
//               {tasks.map((task) => (
//                 <ListItem key={task.id} taskId={task.id} />
//               ))}
//               <div className='flex justify-between mr-5 mt-5'>
//                 <div></div>
//                 <CreateButton />
//               </div>
//             </div>
//           </div>

//           <div className='mb-[50px]'>
//             <div className='sticky top-0 z-[1] bg-mainBg'>
//               <SectionName name={'Another Tasks'} />
//             </div>
//             <div className='z-[0]'>
//               {tasks.map((task) => (
//                 <ListItem key={task.id} taskId={task.id} />
//               ))}
//               <div className='flex justify-between mr-5 mt-5'>
//                 <div></div>
//                 <CreateButton />
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   )
// }

// export default Home

import React from 'react'
import { Outlet } from 'react-router-dom'

const view = localStorage.getItem('view')
if (!view) {
  localStorage.setItem('view', '/list')
}

const Home = () => {
  return (
    <div className='h-[calc(100vh-50px)] w-full flex justify-center pt-10'>
      <Outlet />
    </div>
  )
}

export default Home

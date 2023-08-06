// import React from 'react'
// import Button from '../components/Button/Button'
// import Plus from '../components/svgs/Plus'
// import ListItem from '../components/ListItem/ListItem'
// import SectionName from '../components/SectionName/SectionName'
// import NoTasks from '../components/svgs/NoTasks'
// import styles from './Home.module.scss'
// import { useSelector } from 'react-redux'

// const Home = () => {
//   const tasks = useSelector((state) => state.tasks.tasks)

//   return (
//     <div>
//       <div className={styles.startDevider}></div>

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
//         <section className='mb-8'>
//           <div className={styles.listContainer}>
//             <SectionName name={'Today'} />
//             {tasks.map((task) => (
//               <ListItem key={task.id} task={task} />
//             ))}
//           </div>
//         </section>
//       )}

//       <div className='h-20'></div>
//     </div>
//   )
// }

// export default Home

// import React from 'react'
// import Button from '../components/Button/Button'
// import Plus from '../components/svgs/Plus'
// import ListItem from '../components/ListItem/ListItem'
// import SectionName from '../components/SectionName/SectionName'
// import NoTasks from '../components/svgs/NoTasks'
// import styles from './Home.module.scss'
// import { useSelector } from 'react-redux'

// const Home = () => {
//   const tasks = useSelector((state) => state.tasks.tasks)

//   return (
//     <div>
//       <div className={styles.startDevider}></div>

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
//         <section className='mb-8'>
//           <div className={styles.listContainer}>
//             <SectionName name={'Today'} />
//             {tasks.map((task) => (
//               <ListItem key={task.id} id={task.id} />
//             ))}
//           </div>
//         </section>
//       )}

//       <div className='h-20'></div>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import Button from '../components/Button/Button'
import Plus from '../components/svgs/Plus'
import ListItem from '../components/ListItem/ListItem'
import SectionName from '../components/SectionName/SectionName'
import NoTasks from '../components/svgs/NoTasks'
import styles from './Home.module.scss'
import { useSelector } from 'react-redux'

const Home = () => {
  const tasks = useSelector((state) => state.tasks.tasks)

  return (
    <div className='h-[calc(100vh-50px)] w-full flex justify-center pt-10'>
      {tasks.length === 0 ? (
        <div className={styles.emptyStateContainer}>
          <div className='my-10 flex justify-center text-imageColor'>
            <NoTasks />
          </div>
          <div className='text-task m-0'>
            <p>There are no tasks for today</p>
            <p className='text-gray text-16 font-medium mb-4 leading-1'>
              Let's create a new one
            </p>
          </div>
          <div className='flex flex-row my-2 justify-center items-center'>
            <Button children={'Create task'} svgLeft={<Plus />} />
          </div>
        </div>
      ) : (
        <section className='relative flex flex-col items-center bg-mainBg overflow-y-auto h-[calc(100vh-100px)] w-full pb-10'>
          <div className='mb-10 relative'>
            <div className='sticky top-0 z-[1]'>
              <SectionName name={'Tasks'} />
            </div>
            {tasks.map((task) => (
              <ListItem key={task.id} taskId={task.id} />
            ))}
          </div>

          <div className='mb-10 relative'>
            <div className='sticky top-0 z-[1]'>
              <SectionName name={'Another Tasks'} />
            </div>
            {tasks.map((task) => (
              <ListItem key={task.id} taskId={task.id} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default Home

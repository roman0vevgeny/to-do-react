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
    <div className='w-full'>
      {/* <div className='sticky top-0 z-[10] h-[30px] bg-mainBg'></div> */}

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
        <div className='relative z-[10] bg-mainBg overflow-auto h-[calc(100vh-110px)]'>
          <div className='sticky top-0 z-[10] h-[30px] bg-mainBg'></div>
          <section className='mb-8'>
            <div className='sticky top-0 z-[10]'>
              <SectionName name={'Tasks'} />
            </div>
            <div className='mt-[0px]'>
              {tasks.map((task) => (
                <div className='mt-[0px]' key={task.id}>
                  <ListItem taskId={task.id} />
                </div>
              ))}
            </div>

            <div className='h-[30px]'></div>
          </section>
          <section className='mb-8 overflow-y-auto'>
            <div className='sticky top-0 z-[10]'>
              <SectionName name={'Tasks'} />
            </div>

            {tasks.map((task) => (
              <div className='mt-[0px]' key={task.id}>
                <ListItem taskId={task.id} />
              </div>
            ))}
            <div className='h-[30px]'></div>
          </section>
          {/* <div className='h-[60px]'></div> */}
        </div>
      )}

      {/* <div className='h-20'></div> */}
    </div>
  )
}

export default Home

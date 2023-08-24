// import React from 'react'
// import InfoCard from '../Info/InfoCard'
// import Star from '../svgs/Star'
// import Subtasks from '../svgs/Subtasks'
// import TaskName from '../TaskName/TaskName'
// import CheckBox from '../CheckBox/CheckBox'
// import styles from './ListItem.module.scss'
// import Cal from '../svgs/Cal'
// import Tag from '../Tag/Tag'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   updateTaskChecked,
//   updateTaskIsFavorite,
// } from '../../features/tasksSlice'
// import InfoExpiration from '../Info/InfoExpiration'
// import { selectTaskById } from '../../helpers/selectTaskById'
// import Folder from '../svgs/Folder'

// const ListItem = ({ taskId, onClick, isDragging }) => {
//   const task = useSelector((state) => selectTaskById(state, taskId))
//   const dispatch = useDispatch()
//   const checked = task.checked
//   const favorite = task.favorite
//   const totalSubtasks = task.subtasks.length
//   const completedSubtasks = task.subtasks.filter(
//     (subtask) => subtask.checked
//   ).length
//   const subtasksCounter = `${completedSubtasks}/${totalSubtasks}`
//   const allTags = useSelector((state) => state.tags)
//   const allProjects = useSelector((state) => state.projects)

//   const handleToggleFavorite = (e) => {
//     dispatch(updateTaskIsFavorite({ id: task.id, favorite: !task.favorite }))
//     e.stopPropagation()
//   }

//   const toggleChecked = () => {
//     dispatch(updateTaskChecked(taskId))
//   }

//   const renderProjects = () => {
//     if (task.projects.length === 1) {
//       const project = allProjects.find(
//         (project) => project.id === task.projects[0]
//       )
//       return <InfoCard svg={<Folder />} children={project.name} />
//     } else if (task.projects.length > 1) {
//       const firstProject = allProjects.find(
//         (project) => project.id === task.projects[0]
//       )
//       return (
//         <>
//           <InfoCard svg={<Folder />} children={`${firstProject.name}...`} />
//         </>
//       )
//     }
//     return null
//   }

//   return (
//     <div className='relative w-full cursor-auto'>
//       <div
//         className={isDragging ? styles.dragging : styles.body}
//         onClick={onClick}>
//         <button className={styles.checkbox} onClick={toggleChecked}>
//           <CheckBox checked={checked} toggleChecked={toggleChecked} />
//         </button>
//         <div className={styles.clickable}>
//           <div className='flex flex-raw justify-between items-start w-full'>
//             <div className='flex flex-grow'>
//               <TaskName name={task.name} checked={task.checked} />
//             </div>
//             <div className='flex mt-[2px]'>
//               {renderProjects()}
//               {task.subtasks && task.subtasks.length > 0 && (
//                 <InfoCard svg={<Subtasks />} children={subtasksCounter} />
//               )}
//               {task.expirationDate && (
//                 <InfoExpiration
//                   svg={<Cal />}
//                   children={new Date(task.expirationDate).toLocaleDateString(
//                     navigator.language,
//                     {
//                       day: '2-digit',
//                       month: '2-digit',
//                       year: '2-digit',
//                     }
//                   )}
//                   expirationDate={task.expirationDate}
//                   checked={task.checked}
//                 />
//               )}
//               <button
//                 className={favorite ? styles.favorite : styles.notFavorite}
//                 onClick={handleToggleFavorite}>
//                 <Star />
//               </button>
//             </div>
//           </div>
//           <div className='flex'>
//             {task.tags.length > 0 && (
//               <div className='flex max-w-[600px] flex-wrap'>
//                 {task.tags.map((tagId, index) => {
//                   const tag = allTags.find((tag) => tag.id === tagId)
//                   return (
//                     tag && (
//                       <Tag
//                         color={tag.color}
//                         tagName={tag.name}
//                         key={index}
//                         checked={checked}
//                       />
//                     )
//                   )
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className={isDragging ? '' : styles.devider}></div>
//     </div>
//   )
// }

// export default ListItem

import React from 'react'
import InfoCard from '../Info/InfoCard'
import Star from '../svgs/Star'
import Subtasks from '../svgs/Subtasks'
import TaskName from '../TaskName/TaskName'
import CheckBox from '../CheckBox/CheckBox'
import styles from './ListItem.module.scss'
import Cal from '../svgs/Cal'
import Tag from '../Tag/Tag'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateTaskChecked,
  updateTaskIsFavorite,
} from '../../features/tasksSlice'
import InfoExpiration from '../Info/InfoExpiration'
import { selectTaskById } from '../../helpers/selectTaskById'
import Folder from '../svgs/Folder'

const ListItem = ({ taskId, onClick, isDragging }) => {
  const task = useSelector((state) => selectTaskById(state, taskId))
  const dispatch = useDispatch()
  const checked = task.checked
  const favorite = task.favorite
  const totalSubtasks = task.subtasks.length
  const completedSubtasks = task.subtasks.filter(
    (subtask) => subtask.checked
  ).length
  const subtasksCounter = `${completedSubtasks}/${totalSubtasks}`
  const allTags = useSelector((state) => state.tags)
  const allProjects = useSelector((state) => state.projects)

  const handleToggleFavorite = (e) => {
    dispatch(updateTaskIsFavorite({ id: task.id, favorite: !task.favorite }))
    e.stopPropagation()
  }

  const toggleChecked = (e) => {
    e.stopPropagation()
    dispatch(updateTaskChecked(taskId))
  }

  const renderProjects = () => {
    return (
      <div className={styles.projectContainer}>
        {task.projects.map((projectId, index) => {
          const project = allProjects.find(
            (project) => project.id === projectId
          )
          return (
            project && (
              <InfoCard key={index} svg={<Folder />} children={project.name} />
            )
          )
        })}
      </div>
    )
  }

  return (
    <div className='relative w-full cursor-auto'>
      <div
        className={isDragging ? styles.dragging : styles.body}
        onClick={onClick}>
        <button className={styles.checkbox} onClick={toggleChecked}>
          <CheckBox checked={checked} toggleChecked={toggleChecked} />
        </button>
        <div className={styles.clickable}>
          <div className='flex flex-raw justify-between items-start w-full'>
            <div className='flex flex-grow'>
              <TaskName name={task.name} checked={task.checked} />
            </div>
            <div className='flex mt-[2px]'>
              {renderProjects()}
              {task.subtasks && task.subtasks.length > 0 && (
                <InfoCard svg={<Subtasks />} children={subtasksCounter} />
              )}
              {task.expirationDate && (
                <InfoExpiration
                  svg={<Cal />}
                  children={new Date(task.expirationDate).toLocaleDateString(
                    navigator.language,
                    {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit',
                    }
                  )}
                  expirationDate={task.expirationDate}
                  checked={task.checked}
                />
              )}
              <button
                className={favorite ? styles.favorite : styles.notFavorite}
                onClick={handleToggleFavorite}>
                <Star />
              </button>
            </div>
          </div>
          <div className='flex'>
            {task.tags.length > 0 && (
              <div className='flex max-w-[600px] flex-wrap'>
                {task.tags.map((tagId, index) => {
                  const tag = allTags.find((tag) => tag.id === tagId)
                  return (
                    tag && (
                      <Tag
                        color={tag.color}
                        tagName={tag.name}
                        key={index}
                        checked={checked}
                      />
                    )
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={isDragging ? styles.deviderDrag : styles.devider}></div>
    </div>
  )
}

export default ListItem

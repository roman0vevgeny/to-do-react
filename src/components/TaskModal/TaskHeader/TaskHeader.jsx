import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTaskIsFavorite } from '../../../features/tasksSlice'
import InfoCard from '../../Info/InfoCard'
import Subtasks from '../../svgs/Subtasks'
import Star from '../../svgs/Star'
import Cal from '../../svgs/Cal'
import styles from './TaskHeader.module.scss'
import { formatDate } from '../../../helpers/formatDate'

const TaskHeader = () => {
  const dispatch = useDispatch()
  const task = useSelector((state) => state.tasks[task.id])
  const subtasks = useSelector((state) => state.tasks[task.id].subtasks)
  const creationDate = useSelector((state) => state.tasks[task.id].creationDate)
  const expirationDate = useSelector(
    (state) => state.tasks[task.id].expirationDate
  )
  const favorite = useSelector((state) => state.tasks[task.id].favorite)

  const handleToggleFavorite = () => {
    dispatch(updateTaskIsFavorite(task.id))
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center text-gray mb-3'>
        <p className='text-12'>Created at {formatDate(creationDate)}</p>
        <div className='flex flex-row justify-end'>
          {expirationDate && (
            <InfoCard svg={<Cal />} children={formatDate(expirationDate)} />
          )}
          {subtasks && (
            <InfoCard
              svg={<Subtasks />}
              children={`${
                subtasks.filter((subtask) => subtask.checked).length
              }/${subtasks.length}`}
            />
          )}
          <button
            className={favorite ? styles.favorite : styles.notFavorite}
            onClick={handleToggleFavorite}>
            <Star />
          </button>
        </div>
      </div>
      <div className={styles.sectionDevider}></div>
    </div>
  )
}

export default TaskHeader

//   const handleExpirationDateChange = (expirationDate) => {
//     const dateString = expirationDate
//     if (dateString.length > 0) {
//       dispatch(
//         updateTaskExpirationDate({ id: task.id, expirationDate: dateString })
//       )
//     }
//   }

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTaskIsFavorite } from '../../../features/tasksSlice'
import InfoCard from '../../Info/InfoCard'
import Subtasks from '../../svgs/Subtasks'
import Star from '../../svgs/Star'
import Cal from '../../svgs/Cal'
import styles from './TaskHeader.module.scss'
import { formatDate } from '../../../helpers/formatDate'

const TaskHeader = (taskId) => {
  const dispatch = useDispatch()
  console.log('task id:', taskId)
  const task = useSelector((state) =>
    state.tasks.tasks.find((t) => t.id === taskId.taskId)
  )
  console.log('task:', task)
  const subtasks = task.subtasks
  console.log('subtasks:', subtasks)
  const creationDate = task.creationDate
  console.log('creationDate:', creationDate)
  const expirationDate = task.expirationDate
  const favorite = task.favorite
  console.log('favorite:', favorite)

  const handleToggleFavorite = () => {
    dispatch(updateTaskIsFavorite(task.id))
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center text-gray mb-3'>
        <p className='text-12'>Created at {creationDate}</p>
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

import React from 'react'
import InfoCard from '../../Info/InfoCard'
import Subtasks from '../../svgs/Subtasks'
import Star from '../../svgs/Star'
import Cal from '../../svgs/Cal'
import styles from './TaskHeader.module.scss'
import { formatDate } from '../../../helpers/formatDate'

const TaskHeader = ({ task, onFavoriteChange, isNewTask }) => {
  const { subtasks, creationDate, expirationDate, favorite } = task

  const handleToggleFavorite = () => {
    onFavoriteChange(!favorite)
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center text-gray mb-3'>
        {!isNewTask && creationDate && (
          <p className='text-12'>Created at {creationDate}</p>
        )}
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

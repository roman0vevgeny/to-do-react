import React from 'react'
import InfoCard from '../../Info/InfoCard'
import Subtasks from '../../svgs/Subtasks'
import Star from '../../svgs/Star'
import Cal from '../../svgs/Cal'
import styles from './TaskHeader.module.scss'
import InfoExpiration from '../../Info/InfoExpiration'

const TaskHeader = ({ task, onFavoriteChange, isNewTask }) => {
  const { subtasks, creationDate, expirationDate, favorite, checked } = task

  const handleToggleFavorite = () => {
    onFavoriteChange(!favorite)
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center text-gray mb-3'>
        {!isNewTask && creationDate && (
          <p className='text-12'>Created at {creationDate}</p>
        )}
        {isNewTask && <p className='text-12'> </p>}
        <div className='flex flex-row justify-end'>
          {expirationDate && (
            <InfoExpiration
              svg={<Cal />}
              children={expirationDate}
              expirationDate={expirationDate}
              checked={checked}
            />
          )}
          {subtasks && subtasks.length > 0 && (
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

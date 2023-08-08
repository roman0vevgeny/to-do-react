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
          <p className='text-12'>
            Created at{' '}
            {new Date(creationDate).toLocaleDateString(navigator.language, {
              day: '2-digit',
              month: '2-digit',
              year: '2-digit',
            })}
          </p>
        )}
        {isNewTask && <p className='text-12'>Create a new task</p>}
        <div className='flex flex-row justify-end'>
          {expirationDate && (
            <InfoExpiration
              svg={<Cal />}
              children={new Date(expirationDate).toLocaleDateString(
                navigator.language,
                {
                  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit',
                }
              )}
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

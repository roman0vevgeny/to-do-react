import React from 'react'

const TaskHeader = () => {
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
            className={task.isFavorite ? styles.favourite : styles.notFavourite}
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

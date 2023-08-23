import React from 'react'
import styles from './ProjectDraggable.module.scss'
import Delete from '../../../svgs/Delete'
import Folder from '../../../svgs/Folder'

const capitalizeFirstLetter = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}

const ProjectDraggable = ({ projectName, onDelete, isDragging }) => {
  return (
    <div className='w-full'>
      <div
        className={
          styles.withDelete +
          ' ' +
          (isDragging
            ? 'shadow-lg bg-gray text-grayHover border-1 border-grayHover '
            : 'border-1 border-borderMain')
        }>
        <div className={styles.folder} onClick={onDelete}>
          <Folder />
        </div>
        <p>{capitalizeFirstLetter(projectName)}</p>
        <div className={styles.svg} onClick={onDelete}>
          <Delete />
        </div>
      </div>
    </div>
  )
}

export default ProjectDraggable

import React from 'react'
import styles from './TaskName.module.scss'

const TaskName = ({ name }) => {
  return (
    <div className={styles.textSmall}>
      <h3>{name}</h3>
    </div>
  )
}

export default TaskName

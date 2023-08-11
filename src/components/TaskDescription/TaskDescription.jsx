import React from 'react'
import styles from './TaskDescription.module.scss'

const TaskDescription = ({ description, checked }) => {
  return (
    <div className={checked ? styles.textSmallChecked : styles.textSmall}>
      <h2>{description}</h2>
    </div>
  )
}

export default TaskDescription

import React from 'react'
import styles from './TaskDescription.module.scss'

const TaskDescription = ({ description, checked }) => {
  return (
    <div className={checked ? styles.textChecked : styles.text}>
      <h2>{description}</h2>
    </div>
  )
}

export default TaskDescription

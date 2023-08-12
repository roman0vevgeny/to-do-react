import React from 'react'
import styles from './TaskName.module.scss'

const TaskName = ({ name, checked, cards }) => {
  return (
    <div
      className={
        (checked ? styles.textSmallChecked : styles.textSmall) &&
        (cards ? styles.textBig : styles.textSmall)
      }>
      <h3>{name}</h3>
    </div>
  )
}

export default TaskName

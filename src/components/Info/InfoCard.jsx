import React from 'react'
import styles from './InfoCard.module.scss'

const InfoCard = ({ svgLeft, date, subtasksCounter }) => {
  return (
    <div className={styles.main}>
      {svgLeft}
      {date && <div>{date}</div>}
      {subtasksCounter && <div>{subtasksCounter}</div>}
    </div>
  )
}

export default InfoCard

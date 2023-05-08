import React from 'react'
import styles from './ViewButton.module.scss'

const ViewButton = ({ svg }) => {
  return <button className={styles.button}>{svg}</button>
}

export default ViewButton

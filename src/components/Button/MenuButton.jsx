import React from 'react'
import styles from './MenuButton.module.scss'

const MenuButton = ({ svg }) => {
  return <div className={styles.main}>{svg}</div>
}

export default MenuButton
